/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import getWeb3util from '../utils/getweb3'
import * as actionTypes from './actionTypes'
import {NETWORK_ID} from "../../config";

export const getWeb3 = () => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.WEB3_REQUEST })

    const web3 = await getWeb3util()
    const accounts = await web3.eth.getAccounts()
    const gasPrice = await web3.eth.getGasPrice()
    const network = await web3.eth.net.getId()

    // Rinkeby network ID is 4
    if (network !== NETWORK_ID) {
      return dispatch({
        type: actionTypes.WEB3_FAILURE,
        error: "Wrong network",
      })
    }

    dispatch({
      type: actionTypes.WEB3_SUCCESS,
      payload: { web3, accounts, gasPrice },
    })
  }
}


export const depositLinks = (contract, amount) => {}
