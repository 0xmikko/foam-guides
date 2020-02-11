/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React, {useState} from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
  useHistory,
  useParams,
} from 'react-router';
import ReactMapboxGl, {Feature, Layer, MapContext} from 'react-mapbox-gl';
import {Helmet} from 'react-helmet';
import BoxProvider from './components/BoxProvider';
import ReviewWriteModal from './containers/ReviewWriteModal';
import POIList from './containers/POIList';
import POIDetails from './containers/POIDetails';
import Account from './containers/Account';
import {MAP_ACCESS_TOKEN} from './config';
import * as reducers from './store/reducers';
import * as actions from './store/actions';
import {connect} from 'react-redux';

const Map = ReactMapboxGl({
  accessToken: MAP_ACCESS_TOKEN,
});

function App({getPOI}) {
  const [show, setShow] = useState(false);
  const [threadID, setThreadID] = useState(null);

  const [lng, setLng] = useState(-79.5);
  const [lat, setLat] = useState(40);
  const [zoom, setZoom] = useState(9);

  const onTransform = e => {
    if (e.fitboundUpdate) {
      console.log('Map bounds have been programmatically changed');
    } else {
      console.log('Map bounds have been changed by user interaction');
      const bounds = e.getBounds();
      getPOI(bounds)

    }

    // const aLng = e.transform._center.lng.toFixed(6);
    // const aLat = e.transform._center.lat.toFixed(6);
    // const aZoom = e.transform._zoom;
    //
    // console.log(e);
    //
    // if (lng !== aLng) setLng(aLng);
    // if (lat !== aLat) setLat(aLat);
    // if (zoom !== aZoom) setZoom(aZoom);
    //
    // history.push(`/maps/@${aLng},${aLat},${aZoom}`);
  };

  const handleClose = () => setShow(false);
  const handleShow = id => {
    setThreadID(id)
    setShow(true);
  }

  const history = useHistory();

  return (
    <>
      <Helmet>
        <title>MapScreen</title>
      </Helmet>

      <BoxProvider />
      <ReviewWriteModal show={show} onHide={handleClose} listingHash={threadID} />
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100wh',
        }}
        center={[lng, lat]} // starting position
        zoom={[zoom]} // starting zoom
        onMoveEnd={onTransform}
        onZoomEnd={onTransform}>
        <Switch>
          <Route
            path="/maps/@:lng,:lat,:zoom"
            exact={true}
            component={POIList}
          />
          <Route
            path="/"
            exact={true}
            component={POIList}
          />
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


const mapStateToProps = state => ({
  boxAccount: reducers.boxAccount(state),
});

const mapDispatchToProps = dispatch => ({
  getPOI: boundaries => dispatch(actions.getPOI(boundaries)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
