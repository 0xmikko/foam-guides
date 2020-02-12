/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {connect} from 'react-redux';
import 'react-rater/lib/react-rater.css';
import WindowWidget from '../components/WindowWidget';
import {POI} from './POI';

import * as reducers from '../store/reducers';
import {Helmet} from 'react-helmet';

export const POIList = ({POIs}) => {
  let poisRendered;

  const {data} = POIs;

  if (!data) {
    return 'Loading';
  }

  poisRendered = POIs.data.map(e => <POI item={e} />) || 'Nothing was found';

  return (
    <>
      <Helmet>
        <title>Foam Guide</title>
      </Helmet>
      <WindowWidget>
        <h5 style={{marginTop: '14px', marginBottom: '8px',}}>Points of interest</h5>
        {poisRendered}
      </WindowWidget>
    </>
  );
};

const mapStateToProps = state => ({
  POIs: reducers.POIList(state),
});

export default connect(mapStateToProps)(POIList);
