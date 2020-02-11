/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions';
import * as reducers from '../store/reducers';
import * as statuses from '../store/utils/status';

function BoxProvider({getWeb3, Web3, web3status, boxAccount, getBoxAccount}) {
  useEffect(() => {
    if (!Web3) {
      getWeb3();
    }
  }, []);

  useEffect(() => {
    if (Web3 && !boxAccount.box && web3status === statuses.STATUS_SUCCESS) {
      getBoxAccount();
    }
  }, [Web3, boxAccount, getBoxAccount]);

  return '';
}

const mapStateToProps = state => ({
  boxAccount: reducers.boxAccount(state),
  Web3: reducers.Web3(state),
  web3status: reducers.web3status(state),
});

const mapDispatchToProps = dispatch => ({
  getWeb3: () => dispatch(actions.getWeb3()),
  getBoxAccount: () => dispatch(actions.getBoxAccount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxProvider);
