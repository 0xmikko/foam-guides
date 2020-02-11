/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {connect} from 'react-redux';
import AccountWidget from '../components/AccountWidget';
import Media from 'react-bootstrap/Media';
import Box from '3box';
import MetaJazzicon from '../components/MetaJazzicon';
import * as actions from '../store/actions';
import * as reducers from '../store/reducers';
import * as statuses from '../store/utils/status';
import BoxWrapper from '../components/BoxWrapper';

function Account({boxAccount}) {
  return (
    <AccountWidget>
      <div style={{marginLeft: 'auto', marginRight: '0', float: 'right'}}>
        <BoxWrapper>
          <Media>
            <Media.Body
              style={{
                marginRight: '10px',
                marginTop: '10px',
                verticalAlign: 'middle',
              }}>
              <div className="align-self-center">
                <h6>{boxAccount.name}</h6>
              </div>
            </Media.Body>
            <MetaJazzicon diameter={40} address={boxAccount.address} />
          </Media>
        </BoxWrapper>
      </div>
    </AccountWidget>
  );
}

const mapStateToProps = state => ({
  boxAccount: reducers.boxAccount(state),
});

export default connect(mapStateToProps)(Account);
