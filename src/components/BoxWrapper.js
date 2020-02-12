/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */
import {connect} from 'react-redux';
import * as reducers from '../store/reducers';
import * as statuses from '../store/utils/status';

function BoxWrapper({children, web3status, boxAccount}) {
  if (web3status !== statuses.STATUS_SUCCESS) {
    return 'Please, use Metamask to connect your account';
  } else if (boxAccount.status !== statuses.STATUS_SUCCESS) {
    return 'Connecting to 3Box profile, please wait...';
  }
  return children;
}

const mapStateToProps = state => ({
  boxAccount: reducers.boxAccount(state),
  web3status: reducers.web3status(state),
});

export default connect(mapStateToProps)(BoxWrapper);
