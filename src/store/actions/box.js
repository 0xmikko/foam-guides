/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import Box from '3box';
import * as actionTypes from './actionTypes';
import {APP_SPACE_NAME, ETH_MODERATOR_ADDRESS} from '../../config';

export const getBoxAccount = () => {
  console.log('Getting box account');
  return async (dispatch, getState) => {
    // Getting web3 instance & account
    const web3 = getState().web3.web3;
    const accounts = getState().web3.accounts;

    // Connection to BOX
    const box = await Box.openBox(accounts[0], web3.currentProvider);
    if (!box) {
      dispatch({
        type: actionTypes.BOX_FAILURE,
      });
      return;
    }

    // Getting Box Profile
    const profile = await Box.getProfile(accounts[0]);
    console.log(profile);

    dispatch({
      type: actionTypes.BOX_SUCCESS,
      payload: {
        box,
        name: profile.name,
        address: accounts[0],
      },
    });
  };
};

export const openThread = listingHash => {
  return async (dispatch, getState) => {
    dispatch({
      type: actionTypes.BOX_OPEN_THREAD_PREFIX + actionTypes.DETAIL_REQUEST,
      meta: {id: listingHash},
    });

    const spaces = await Box.listSpaces(ETH_MODERATOR_ADDRESS);
    if (!spaces.includes(APP_SPACE_NAME)) {
      dispatch({
        type: actionTypes.BOX_OPEN_THREAD_PREFIX + actionTypes.DETAIL_SUCCESS,
        payload: [],
        meta: {id: listingHash},
      });
      return;
    }

    const box = getState().box.box;
    if (!box) {
      dispatch({type: 'WRONG BOX'});
    }


    await box.auth([APP_SPACE_NAME], {address: getState().web3.accounts[0]});
    await box.syncDone;
    // const space = await box.openSpace(APP_SPACE_NAME);

    console.log(box);


    console.log('RW-S for', listingHash);
    try {

      const thread = await box.openThread(APP_SPACE_NAME, listingHash, {
        firstModerator: ETH_MODERATOR_ADDRESS,
      });
      let reviews= await thread.getPosts();
      console.log('RW-F', reviews);

      // Filter all messages which doesn't contains rating & review as data fields
      reviews = reviews.filter(x => x.message.rating).filter(x => x.message.review)

      dispatch({
        type: actionTypes.BOX_OPEN_THREAD_PREFIX + actionTypes.DETAIL_SUCCESS,
        payload: {data: reviews},
        meta: {id: listingHash},
      });

      const uniqueUsers = [...new Set(reviews.map(x => x.author))];
      uniqueUsers.map(x => dispatch(getProfile(x)))

    } catch (e) {
      console.log('Error', e);
    }
  };
};

export const postReview = (listingHash, data) => {
  console.log(`Wrting comment to ${listingHash} with content ${data}`);
  return async (dispatch, getState) => {
    const box = getState().box.box;
    if (!box) {
      dispatch({type: 'WRONG BOX'});
    }

    const account = getState().web3.accounts[0];

    console.log(box);
    await box.auth([APP_SPACE_NAME], {address: getState().web3.accounts[0]});
    await box.syncDone;

    try {
      const space = await box.openSpace(APP_SPACE_NAME);
      const thread = await box.openThread(APP_SPACE_NAME, listingHash, {
        firstModerator: ETH_MODERATOR_ADDRESS,
      });
      const pid = await thread.post({account, ...data});
      console.log('Done', pid);
      await box.syncDone;
    } catch (e) {
      console.log('ERR ', e);
    }
  };
};

export const getProfile = address => {
  return async (dispatch, getState) => {

    const profile = await Box.getProfile(address)
    console.log(profile)
    dispatch({
      type: actionTypes.BOX_PROFILE_PREFIX + actionTypes.DETAIL_SUCCESS,
      payload: { data: profile },
      meta: { id: address }
    })
  }
}
