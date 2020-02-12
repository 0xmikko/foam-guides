/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */
import {createAction} from 'redux-api-middleware';
import * as actionTypes from './actionTypes';

export const getPOI = boundaries => {
  const DATA_URL =
    'https://map-api-direct.foam.space/poi/filtered?swLng=' +
    boundaries._sw.lng +
    '&swLat=' +
    boundaries._sw.lat +
    '&neLng=' +
    boundaries._ne.lng +
    '&neLat=' +
    boundaries._ne.lat +
    '&status=application&status=listing&status=challenged&status=removed&sort=most_value&limit=500&offset=0';

  return createAction({
    endpoint: DATA_URL,
    method: 'GET',
    types: [
      actionTypes.FOAM_POI_PREFIX + actionTypes.LIST_REQUEST,
      actionTypes.FOAM_POI_PREFIX + actionTypes.LIST_SUCCESS,
      actionTypes.FOAM_POI_PREFIX + actionTypes.LIST_FAILURE,
    ],
  });
};

export const getPOIDetails = listingHash => {
  const id = listingHash;

  return createAction({
    endpoint: `https://map-api-direct.foam.space/poi/details/${listingHash}`,
    method: 'GET',
    types: [
      {
        type: actionTypes.FOAM_POI_PREFIX + actionTypes.DETAIL_REQUEST,
        meta: {id},
      },
      {
        type: actionTypes.FOAM_POI_PREFIX + actionTypes.DETAIL_SUCCESS,
        meta: {id},
      },
      {
        type: actionTypes.FOAM_POI_PREFIX + actionTypes.DETAIL_FAILURE,
        meta: {id},
      },
    ],
  });
};

export const getGuideLevel = address => {
  const id = address;
  console.log('UAA-2', address);
  return async (dispatch) => {
    dispatch({
      type: actionTypes.FOAM_GUIDE_PREFIX + actionTypes.DETAIL_REQUEST,
      meta: {id},
    });

    const result = await fetch(
      'https://map-api-direct.foam.space​/user/' + address + '/assets/',
    );

    if (result.status !== 200) {
      console.log('Error');
    }

    const data = await result.json();
    const score =
      data.verifiedPOIs * 100 +
      data.pendingPOIs * 20 +
      data.challengedPOIs * 30;

    dispatch({
      type: actionTypes.FOAM_GUIDE_PREFIX + actionTypes.DETAIL_SUCCESS,
      payload: {score},
      meta: {id},
    });

  };
};
