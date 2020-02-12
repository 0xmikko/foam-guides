/*
 * FoadGuides
 * https://github.com/MikaelLazarev/foam-guides
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react';

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
        minWidth: '400px',
        maxHeight: '90%',
        borderRadius: '10px',
        border: '1px solid',
        borderColor: '#A0A0A0',
        overflow: 'scroll',
      }}>
      {children}
    </div>
  );
};

export default WindowWidget;
