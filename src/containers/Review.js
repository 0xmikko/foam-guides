/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Card, Media} from 'react-bootstrap';
import {MediaBody} from 'react-bootstrap/Media';
import {GiKnifeFork} from 'react-icons/gi';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import {useHistory} from 'react-router';
import Jazzicon from 'react-jazzicon';
import MetaJazzicon from '../components/MetaJazzicon';
import * as reducers from '../store/reducers';
import * as actions from '../store/actions';
import {connect} from 'react-redux';
import moment from 'moment';

const Review = ({review, rating, author, profiles, account, timestamp}) => {
  const history = useHistory();

  let name = account ? account : author.slice(10);

  if (profiles && profiles[author] && profiles[author].data) {
    name = profiles[author].data.name || account || author.slice(10);
  }

  return (
    <>
      <Card
        style={{
          marginTop: '10px',
          cellPadding: '0px',
          cellSpacing: '0px',
          minHeight: '10px',
        }}>
        <Media
          style={{
            marginLeft: '8px',
            marginRight: '0px',
            minHeight: '40px',
            marginTop: '15px',
          }}>
          <div style={{marginTop: '7px'}}>
            <MetaJazzicon address={account} diameter={30} />
          </div>

          <Media.Body style={{marginLeft: '10px'}}>
            <strong
              className={
                'tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold'
              }
              style={{marginBottom: '0px'}}>
              {name}
            </strong>
            <div className={'mg-b-0 tx-12 tx-color-02'} a={''}>
              Foam Guide (15 reviews){'  '}
              <span className={'tx-color-03'}>
                {moment(timestamp * 1000, 'x').fromNow()}
              </span>
            </div>
            <Rater total={5} rating={rating} interactive={false} />
            <p>{review}</p>
          </Media.Body>
        </Media>
      </Card>
    </>
  );
};

const mapStateToProps = state => ({
  profiles: reducers.Profiles(state),
});

const mapDispatchToProps = dispatch => ({
  // postReview: (listingHash, data) =>
  //   dispatch(actions.postReview(listingHash, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);
