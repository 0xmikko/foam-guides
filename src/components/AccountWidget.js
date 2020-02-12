/*
 * FoadGuides
 * https://github.com/MikaelLazarev/foam-guides
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react';

export const AccountWidget = ({children}) => {
  return (
    <div
      style={{
        display: 'inline-block',
        position: 'absolute',
        top: '20px',
        left:'74%',
        zIndex: '1 !important',
        padding: '6px',
        width: '24%',

      }}>
      {children}
    </div>
  );
};

export default AccountWidget;
