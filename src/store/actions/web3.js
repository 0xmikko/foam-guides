/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import getWeb3util from '../utils/getweb3';
import * as actionTypes from './actionTypes';

export const getWeb3 = () => {
  return async (dispatch, getState) => {
    dispatch({type: actionTypes.WEB3_REQUEST});

    const web3 = await getWeb3util();
    const accounts = await web3.eth.getAccounts();
    const gasPrice = await web3.eth.getGasPrice();

    dispatch({
      type: actionTypes.WEB3_SUCCESS,
      payload: {web3, accounts, gasPrice},
    });
  };
};
