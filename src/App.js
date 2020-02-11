/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React, {useState} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router';
import ReactMapboxGl, {Feature, Layer} from 'react-mapbox-gl';
import {Helmet} from 'react-helmet';
import BoxProvider from './components/BoxProvider';
import ReviewWriteModal from './containers/ReviewWriteModal';
import POIList from './containers/POIList';
import POIDetails from './containers/POIDetails';
import Account from './containers/Account';
import {MAP_ACCESS_TOKEN} from './config';

const Map = ReactMapboxGl({
  accessToken:
    MAP_ACCESS_TOKEN,
});

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Helmet>
        <title>MapScreen</title>
      </Helmet>

      <BoxProvider />
      <ReviewWriteModal show={show} onHide={handleClose} />
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
          <Route
            path="/places/:id"
            exact={true}
            render={() => <POIDetails onWriteComment={handleShow} />}
          />
          <Redirect to={'/'} />
        </Switch>
        <Account />

        <Layer type="symbol" id="marker" layout={{'icon-image': 'marker-15'}}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    </>
  );
}

export default withRouter(App);
