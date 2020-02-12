/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import ReactMapboxGl, {MapContext} from 'react-mapbox-gl';

import BoxProvider from './components/BoxProvider';
import Account from './containers/Account';
import POIDots from './containers/POIDots';
import LeftPanel from './containers/LeftPanel';

import {MAP_ACCESS_TOKEN} from './config';
import * as actions from './store/actions';
import OnboardingModal from './containers/Onboarding';

const Map = ReactMapboxGl({
  accessToken: MAP_ACCESS_TOKEN,
});

function App({getPOI}) {
  const [firstPOICall, setFirstPOICall] = useState(false);

  const [lat, setLat] = useState(-79.5);
  const [lng, setLng] = useState(40);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      setLat(coords.latitude);
      setLng(coords.longitude);
    });
  });

  const onTransform = e => {
    if (!e.fitboundUpdate) {
      console.log('Map bounds have been changed by user interaction');
      const bounds = e.getBounds();
      getPOI(bounds);
    }
  };

  const getPOIAtStartUp = map => {
    if (!firstPOICall) {
      setFirstPOICall(true);
      const bounds = map.getBounds();
      getPOI(bounds);
    }
  };

  return (
    <>
      <BoxProvider />
      <OnboardingModal />

      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100wh',
        }}
        center={[lng, lat]} // starting position
        zoom={[9]} // starting zoom
        onDragEnd={onTransform}
        onZoomEnd={onTransform}>
        <LeftPanel />
        <Account />
        <POIDots />
        <MapContext>{getPOIAtStartUp}</MapContext>
      </Map>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  getPOI: boundaries => dispatch(actions.getPOI(boundaries)),
});

export default connect(null, mapDispatchToProps)(App);
