/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router';
import {Container} from 'react-bootstrap';

import AppBar from './components/AppBar/AppBar';
import Footer from './components/Footer';

import MapScreen from './screens/MapScreen';

function App(props) {
  return (
    <>
      <MapScreen/>
      {/*<AppBar {...props} />*/}

      {/*<Container style={{minHeight: window.innerHeight - 200}}>*/}
      {/*  <Switch>*/}
      {/*    <Route path="/" exact={true} component={MapScreen} />*/}
      {/*    <Redirect to={'/'} />*/}
      {/*  </Switch>*/}
      {/*</Container>*/}
      {/*<Footer />*/}
    </>
  );
}

export default withRouter(App);
