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
import {BeatLoader} from 'react-spinners';
import {Button, Media} from 'react-bootstrap';
import * as reducers from '../store/reducers';
import * as actions from '../store/actions';
import * as status from '../store/utils/status';
import {connect} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import ReviewWriteModal from './ReviewWriteModal';

export const POIDetails = ({
                             getPOIDetails,
                             POIDetails,
                             boxAccount,
                             getReviews,
                             reviews,
                             guides,
                           }) => {
  const {id} = useParams();

  useEffect(() => {
    getPOIDetails(id);
  }, [id]);

  useEffect(() => {
    if (boxAccount.status === status.STATUS_SUCCESS) {
      getReviews(id);
    }
  }, [boxAccount.status]);

  const [showWriteModal, setShowWriteModal] = useState(false);

  if (!POIDetails[id] || POIDetails[id].status !== status.STATUS_SUCCESS) {
    return <BeatLoader size={15} margin={5} />;
  }
  const {data} = POIDetails[id].data;

  let reviewsRendered = <BeatLoader size={15} margin={5} />,
    avgRating = null,
    reviewsQty = null;

  if (reviews[id] && reviews[id].status === status.STATUS_SUCCESS) {
    let reviewsData = reviews[id].data.data;
    console.log('RDD', reviewsData);

    const t = reviewsData.map(x => {
      const account = x.message.account;
      if (!account) {
        x.score = 0;
      } else {
        x.score = guides[account]
          ? guides[account].data
            ? guides[account].data.score
            : 0
          : 0;
      }
      return x;
    });

    const reviewsSorted = t.sort((a, b) =>
      a.score > b.score ? 1 : b.score > a.score ? -1 : 0,
    );

    const sumRating = reviewsData
      .map(e => e.message.rating)
      .reduce((a, b) => a + b, 0);
    avgRating = sumRating / reviewsData.length || 0;

    reviewsQty = reviewsData.length;

    reviewsRendered = reviewsSorted.map(e => (
      <Review
        author={e.author}
        review={e.message.review}
        rating={e.message.rating}
        account={e.message.account}
        key={e.postId}
        timestamp={e.timestamp}
      />
    ));
  }

  return (
    <>
      <Helmet>
        <title>{data.name} - Foam Guide</title>
      </Helmet>
      <ReviewWriteModal
        show={showWriteModal}
        onHide={() => setShowWriteModal(false)}
        place={{id, name: data.name}}
      />
      <WindowWidget>
        <div style={{margin: '15px 10px 10px 10px'}}>
          <Link to={'/'}>Back to list</Link>
          <h4>{data.name}</h4>
          <strong>{avgRating ? avgRating.toFixed(1) : ''} </strong>
          <Rater interactive={false} total={5} rating={avgRating} />
          &nbsp;
          {reviewsQty
            ? reviewsQty === 1
              ? '(1 review)'
              : '(' + reviewsQty + ' reviews)'
            : ''}
          <br />
          <Media>
            <Media.Body>
              <h5 style={{marginTop: '10px'}}>Reviews</h5>
            </Media.Body>
            <Button
              size={'sm'}
              variant={'outline-primary'}
              style={{marginTop: '6px'}}
              onClick={() => setShowWriteModal(true)}>
              Write Review
            </Button>
          </Media>
          {reviewsRendered}
        </div>
      </WindowWidget>
    </>
  );
};

const mapStateToProps = state => ({
  POIDetails: reducers.POIDetails(state),
  boxAccount: reducers.boxAccount(state),
  reviews: reducers.Reviews(state),
  guides: reducers.Guides(state),
});

const mapDispatchToProps = dispatch => ({
  getPOIDetails: listingHash => dispatch(actions.getPOIDetails(listingHash)),
  getReviews: listingHash => dispatch(actions.openThread(listingHash)),
  postComment: (listingHash, data) =>
    dispatch(actions.postReview(listingHash, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(POIDetails);
