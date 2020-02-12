/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react'
import {Redirect, Route, Switch, withRouter} from 'react-router';
import POIList from './POIList';
import POIDetails from './POIDetails';

function LeftPanel() {
  return (<Switch>
    <Route path="/" exact={true} component={POIList} />
    <Route
      path="/places/:id"
      exact={true}
      render={() => <POIDetails />}
    />
    <Redirect to={'/'} />
  </Switch>)
}

export default withRouter(LeftPanel)
