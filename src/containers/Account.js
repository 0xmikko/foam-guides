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
import BoxWrapper from '../components/BoxProvider';

function Account({
  address,
  name,
  web3status,
  boxAccount,
  getWeb3,
  getBoxAccount,
}) {
  address = '0xA6aA18aE16E000787063A404a44Da3A2AC26aa1c';
  const accountName = name ? name : address;

  let result = '';

  if (web3status !== statuses.STATUS_SUCCESS) {
    result = 'Please, use Metamask to connect your account';
  } else if (boxAccount.status !== statuses.STATUS_SUCCESS) {
    result = 'Connecting to 3Box profile...';
  } else {
    result = (
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
    );
  }

  return (
    <AccountWidget>
      <div style={{marginLeft: 'auto', marginRight: '0', float: 'right'}}>
        {result}
      </div>
    </AccountWidget>
  );
}

const mapStateToProps = state => ({
  boxAccount: reducers.boxAccount(state),
  web3status: reducers.web3status(state),
});

const mapDispatchToProps = dispatch => ({
  getWeb3: () => dispatch(actions.getWeb3()),
  getBoxAccount: () => dispatch(actions.getBoxAccount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
