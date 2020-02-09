/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import Box from '3box';
import {BOX_FAILURE, BOX_SUCCESS} from './actionTypes';

export const getBoxAccount = () => {
  console.log("Getting box account")
    return async (dispatch, getState) => {

      // Getting web3 instance & account
      const web3 = getState().web3.web3
      const accounts = getState().web3.accounts

      // Connection to BOX
      const box = await Box.openBox(accounts[0], web3.currentProvider)
      if (!box) {
        dispatch({
          type: BOX_FAILURE
        })
        return
      }

      // Getting Box Profile
      const profile = await Box.getProfile(accounts[0])
      console.log(profile)

      dispatch({
        type: BOX_SUCCESS,
        payload: {
          box,
          name: profile.name,
          address: accounts[0],
        }
      })

    }
}

