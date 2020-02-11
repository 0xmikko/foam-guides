/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import {combineReducers} from 'redux';

import box, * as fromBox from './box';
import * as actionTypes from '../actions/actionTypes';
import web3, * as fromWeb3 from './web3';
import {createDataLoader} from './dataloader';

export default () =>
  combineReducers({
    box,
    foam: createDataLoader(actionTypes.FOAM_POI_PREFIX),
    reviews: createDataLoader(actionTypes.BOX_OPEN_THREAD_PREFIX),
    profiles: createDataLoader(actionTypes.BOX_PROFILE_PREFIX),
    guides: createDataLoader(actionTypes.BOX_PROFILE_PREFIX),
    web3,
  });

// WEB3
export const Web3 = state => fromWeb3.web3(state.web3);
export const web3status = state => fromWeb3.web3status(state.web3);
export const web3accounts = state => fromWeb3.web3accounts(state.web3);

// BOX
export const boxAccount = state => fromBox.boxAccount(state.box);
export const boxPostStatus = state => fromBox.boxPostStatus(state.box);
export const Reviews = state => state.reviews.Details;
export const Profiles = state => state.profiles.Details;

// FOAM
export const POIList = state => state.foam.List;
export const POIDetails = state => state.foam.Details;
export const Guides = state => state.guides.Details;
