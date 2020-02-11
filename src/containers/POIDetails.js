/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React, {useEffect, useState} from 'react';
import 'react-rater/lib/react-rater.css';
import WindowWidget from '../components/WindowWidget';
import Rater from 'react-rater';
import Review from './Review';
import {Button, Container, Media} from 'react-bootstrap';
import * as reducers from '../store/reducers';
import * as actions from '../store/actions';
import * as status from '../store/utils/status';
import {connect} from 'react-redux';
import {Link, useParams} from 'react-router-dom';

export const POIDetails = ({
  onWriteComment,
  getPOIDetails,
  POIDetails,
  boxAccount,
  postComment,
  getReviews,
  reviews,
}) => {
  const POI_HASH = '0x123';

  const {id} = useParams();

  useEffect(() => {
    getPOIDetails(id);
  }, [id]);

  useEffect(() => {
    if (boxAccount.status === status.STATUS_SUCCESS) {
      // postComment(id, "Hello")
      getReviews(id);
    }
  }, [boxAccount.status]);

  if (!POIDetails[id] || POIDetails[id].status !== status.STATUS_SUCCESS) {
    return 'Loading';
  }
  const {data} = POIDetails[id];

  let reviewsRendered = 'Loading', avgRating = null, reviewsQty = null;

  if (reviews[id] && reviews[id].status === status.STATUS_SUCCESS) {

    console.log('RW', reviews[id]);

    const reviewsData = reviews[id].data

    const sumRating = reviewsData.map(e => e.message.rating).reduce((a, b) => a + b, 0);
    avgRating = sumRating / reviewsData.length || 0;

    reviewsQty = reviewsData.length
    reviewsRendered = reviewsData.map(e => <Review author={e.author} review={e.message.review}
                                                         rating={e.message.rating} account={e.message.account} key={e.postId}/>);
  }

  return (
    <WindowWidget>
      <div style={{margin: '15px 10px 10px 10px'}}>
        <Link to={'/'}>Back to POI</Link>
        <h4>{data.name}</h4>
        <strong>{avgRating ? avgRating.toFixed(1) : ""} </strong>
        <Rater interactive={false} total={5} rating={avgRating} />
        &nbsp;({reviewsQty})
        <br />
        <Media>
          <Media.Body>
            <h5 style={{marginTop: '10px'}}>Reviews</h5>
          </Media.Body>
          <Button
            size={'sm'}
            variant={'outline-primary'}
            style={{marginTop: '6px'}}
            onClick={() => (onWriteComment ? onWriteComment(id) : null)}>
            Write Review
          </Button>
        </Media>
        {reviewsRendered}
      </div>
    </WindowWidget>
  );
};

const mapStateToProps = state => ({
  POIDetails: reducers.POIDetails(state),
  boxAccount: reducers.boxAccount(state),
  reviews: reducers.Reviews(state),
});

const mapDispatchToProps = dispatch => ({
  getPOIDetails: listingHash => dispatch(actions.getPOIDetails(listingHash)),
  getReviews: listingHash => dispatch(actions.openThread(listingHash)),
  postComment: (listingHash, data) =>
    dispatch(actions.postReview(listingHash, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(POIDetails);
