/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import * as statuses from '../utils/status';
import * as actionTypes from '../actions/actionTypes';
import {updateState} from '../utils/updateState';

const initialState = {
  box: null,
  name: '',
  address: '',
  state: statuses.STATUS_UPDATE_NEEDED,
  currentThread: null,
  postHashes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOX_REQUEST:
      return updateState(state, {
        box: null,
        name: '',
        address: '',
        status: statuses.STATUS_LOADING,
      });

    case actionTypes.BOX_SUCCESS:
      return updateState(state, {
        box: action.payload.box,
        name: action.payload.name,
        address: action.payload.address,
        status: statuses.STATUS_SUCCESS,
      });

    case actionTypes.BOX_FAILURE:
      return updateState(state, {
        box: null,
        name: '',
        address: '',
        status: statuses.STATUS_FAILURE,
      });

    case actionTypes.BOX_POST_STATUS:
      const { id } = action.meta;
      return updateState(state, {
        postHashes: updateState(state.postHashes,
          {
            [id]: action.payload,
          })
      });

    default:
      return state;
  }
};

export const boxAccount = state => state;
export const boxPostStatus = state => state.postHashes;
