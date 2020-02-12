/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router';

import {Feature, Layer} from 'react-mapbox-gl';
import {getPointCoordsFromHash} from '../helpers';
import * as reducers from '../store/reducers';

function POIDots({poiList}) {
  let points;
  const history = useHistory();

  if (poiList && poiList.data) {
    points = poiList.data.map(e => (
      <Feature
        key={e['geohash']}
        coordinates={getPointCoordsFromHash(e['geohash'])}
        onClick={() => history.push(`/places/${e['listingHash']}`)}
      />
    ));
  }

  return (
    <Layer
      type="circle"
      id="marker"
      paint={{'circle-radius': 10, 'circle-color': '#b10215'}}>
      {points}
    </Layer>
  );
}

const mapStateToProps = state => ({
  poiList: reducers.POIList(state),
});

export default connect(mapStateToProps)(POIDots);
