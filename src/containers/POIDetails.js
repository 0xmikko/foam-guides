/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import 'react-rater/lib/react-rater.css';
import WindowWidget from '../components/WindowWidget';
import Form from 'react-bootstrap/Form';
import {POI} from './POI';
import Rater from 'react-rater';

export const POIDetails = () => {
  const pois = [
    {
      name: 'Restraunt',
      address: 'strasse 34',
    },
    {
      name: 'Restraunt',
      address: 'strasse 34',
    },
  ];

  const poisRendered = pois.map(e => <POI />);

  return (
    <WindowWidget>
      <h5>Restaurant Farewell</h5>
      <Rater interactive={false} total={5} onRate={4}/>
      <br />
      <h6>Reviews</h6>
    </WindowWidget>
  );
};
