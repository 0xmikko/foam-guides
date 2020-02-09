/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import { updateState } from '../utils/updateState'
import * as actionTypes from '../actions/actionTypes'
import * as statuses from '../utils/status'

const initialState = {
  web3: null,
  accounts: null,
  gasPrice: null,
  status: statuses.STATUS_UPDATE_NEEDED
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WEB3_REQUEST:
      return updateState(state, {
        web3: null,
        status: statuses.STATUS_LOADING
      })

    case actionTypes.WEB3_SUCCESS:
      return updateState(state, {
        ...action.payload,
        status: statuses.STATUS_SUCCESS
      })

    case actionTypes.WEB3_FAILURE:
      return updateState(state, {
        ...action.payload,
        status: statuses.STATUS_FAILURE
      })


    default:
      return state
  }
}

export const web3 = state => state.web3
export const web3accounts = state => state.accounts
export const web3status = state => state.status

