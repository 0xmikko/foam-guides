/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import 'react-rater/lib/react-rater.css';
import WindowWidget from '../components/WindowWidget';
import Form from 'react-bootstrap/Form';
import {POI} from './POI';
import Rater from 'react-rater';
import {Review} from './Review';
import {Button, Container, Media} from 'react-bootstrap';
import * as reducers from '../store/reducers';
import * as actions from '../store/actions';
import {connect} from 'react-redux';

export const POIDetails = ({ onWriteComment}) => {
  const POI_HASH = '0x123';

  const reviews = [
    {
      address: '0xA6aA18aE16E000787063A404a44Da3A2AC26aa1c',
      rating: 3,
      review: 'strasse 34',
    },
    {
      address: '0xD02ADA591e043DD005bc9c475152CfC8175EB710',
      rating: 2,
      review: 'strasse 34',
    },
    {
      address: '0xD02ADA591e043DD005bc9c475152CfC8175EB710',
      rating: 3,
      review: 'strasse 34',
    },
  ];

  const sumRating = reviews.map(e => e.rating).reduce((a, b) => a + b, 0);
  const avgRating = sumRating / reviews.length || 0;

  const reviewsRendered = reviews.map(e => <Review address={e.address} />);

  return (
    <WindowWidget>
      <div style={{margin: '15px 10px 10px 10px'}}>
        <a href={'#'}>Back to POI</a>
        <h4>Restaurant Farewell</h4>
        <strong>{avgRating.toFixed(1)} </strong>
        <Rater interactive={false} total={5} rating={avgRating} />
        &nbsp;({reviews.length})
        <br />
        <Media>
          <Media.Body>
            <h5 style={{marginTop: '10px'}}>Reviews</h5>
          </Media.Body>
            <Button
              size={'sm'}
              variant={'outline-primary'}
              style={{marginTop: '6px'}}
              onClick={() => onWriteComment ? onWriteComment() : null}>

              Write Review
            </Button>
        </Media>
        {reviewsRendered}
      </div>
    </WindowWidget>
  );
};

const mapStateToProps = state => ({
  boxAccount: reducers.boxAccount(state),
});

const mapDispatchToProps = dispatch => ({
  getBoxAccount: () => dispatch(actions.getBoxAccount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(POIDetails);
