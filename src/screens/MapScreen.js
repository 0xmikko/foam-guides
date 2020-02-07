import React from 'react';
import {Helmet} from 'react-helmet';
import ReactMapboxGl, {Layer, Feature} from 'react-mapbox-gl';

import Web3Wrapper from '../components/Web3Wrapper';
import Form from 'react-bootstrap/Form';
import AppBar from '../components/AppBar/AppBar';
import {POI} from '../containers/POI';
import {POIList} from '../containers/POIList';
import {Redirect, Route, Switch} from 'react-router';
import {POIDetails} from '../containers/POIDetails';
import Account from '../containers/Account';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibWlrYWVsbGF6YXJldiIsImEiOiJjazZhaTE0cTgwODJxM250aWxvejRmN2h5In0.kCyQNOkMpLgspjrtJQrU5A',
});

const MapScreen = props => {
  return (
    <>
      <Helmet>
        <title>MapScreen</title>
      </Helmet>
      {/*<Web3Wrapper>*/}

      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100wh',
        }}
        center={[-79.5, 40]} // starting position
        zoom={[9, 9]} // starting zoom
        onDrag={a => {
          console.log(a.transform._center.lng, a.transform);
        }}>
        <Switch>
          <Route path="/" exact={true} component={POIList} />
          <Route path="/places/:id" exact={true} component={POIDetails} />
          <Redirect to={'/'} />
        </Switch>
        <Account/>

        <Layer type="symbol" id="marker" layout={{'icon-image': 'marker-15'}}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    </>
  );
};

export default MapScreen;
