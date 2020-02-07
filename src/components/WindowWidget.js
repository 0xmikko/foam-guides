/*
 * FoadGuides
 * https://github.com/MikaelLazarev/foam-guides
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react';
import {Card} from 'react-bootstrap';

export const WindowWidget = ({children}) => {
  return (
    <div
      style={{
        display: 'inline-block',
        position: 'absolute',
        top: '20px',
        left: '20px',
        backgroundColor: '#FFFFFF',
        zIndex: '1 !important',
        padding: '6px',
        width: '25%',
        minWidth: '350px',
        borderRadius: '10px',
        border: '1px solid',
        borderColor: '#A0A0A0',
      }}>
      {children}
    </div>
  );
};

export default WindowWidget;
