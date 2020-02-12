/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import { updateState } from '../utils/updateState'
import * as actionTypes from '../actions/actionTypes'
import * as status from '../utils/status'

const initialState = {
  List: {
    data: [],
    error: null,
    status: status.STATUS_UPDATE_NEEDED,
  },
  Details: [],
  Updates: {},
}

export function createDataLoader(prefix = '') {
  return function(state = initialState, action) {
    let id, hash, hashUpdate
    switch (action.type) {
      case prefix + actionTypes.LIST_REQUEST:
        return updateState(state, {
          List: updateState(state.List, {
            status: status.STATUS_LOADING,
          }),
        })

      case prefix + actionTypes.LIST_UPDATE:
        return updateState(state, {
          List: updateState(state.List, {
            status: status.STATUS_UPDATING,
          }),
        })

      case prefix + actionTypes.LIST_SUCCESS:
        return updateState(state, {
          List: updateState(state.List, {
            data: action.payload,
            status: status.STATUS_SUCCESS,
          }),
        })

      case prefix + actionTypes.LIST_FAILURE:
        return updateState(state, {
          List: updateState(state.List, {
            data: [],
            error: 'Server connection error',
            status: status.STATUS_FAILURE,
          }),
        })

      case prefix + actionTypes.UPLOAD_REQUEST:
      case prefix + actionTypes.DETAIL_REQUEST:
        id = action.meta.id
        return updateState(state, {
          Details: updateState(state.Details, {
            [id]: {
              ...state.Details[id],
              status: status.STATUS_LOADING,
            },
          }),
        })

      case prefix + actionTypes.UPLOAD_SUCCESS:
      case prefix + actionTypes.DETAIL_SUCCESS:
        id = action.meta.id

        console.log("ACT", action)

        hash = action.meta.hash || 0
        hashUpdate = {}
        hashUpdate[hash] = +Date.now()

        return updateState(state, {
          Details: updateState(state.Details, {
            [id]: {
              data: action.payload,
              status: status.STATUS_SUCCESS,
            },
          }),
          Updates: updateState(state.Updates, hashUpdate),
        })

      case prefix + actionTypes.UPLOAD_FAILURE:
      case prefix + actionTypes.DETAIL_FAILURE:
        id = action.meta.id
        const detailError = action.payload.response
          ? action.payload.response.message
          : action.payload.message
        return updateState(state, {
          Details: updateState(state.Details, {
            [id]: {
              data: undefined,
              error: detailError || 'Server connection error',
              status: status.STATUS_FAILURE,
            },
          }),
          Updates: updateState(state.Updates, hashUpdate),
        })

      default:
        return state
    }
  }
}
