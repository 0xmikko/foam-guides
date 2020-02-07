import React from 'react';
import 'react-rater/lib/react-rater.css';
import WindowWidget from '../components/WindowWidget';
import Form from 'react-bootstrap/Form';
import {POI} from './POI';

export const POIList = () => {
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
      <Form>
        <Form.Control placeholder={'Search'} className={'form-control'} />
      </Form>
      {poisRendered}
    </WindowWidget>
  );
};
