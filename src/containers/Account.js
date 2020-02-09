/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import AccountWidget from '../components/AccountWidget';
import Media from 'react-bootstrap/Media';
import Box from '3box'
import MetaJazzicon from '../components/MetaJazzicon';

function Account({address, name}) {

  address = '0xA6aA18aE16E000787063A404a44Da3A2AC26aa1c'
  const accountName = (name) ? name : address

  return (
    <AccountWidget>
      <div style={{marginLeft: 'auto',  marginRight: '0', float: 'right'}}>
        <Media>
          <Media.Body style={{marginRight: '10px', marginTop: '10px', verticalAlign: 'middle'}}>
            <div className="align-self-center">
            <h6 >{accountName}</h6>
            </div>
          </Media.Body>
          <MetaJazzicon diameter={40} address={address} />
        </Media>


      </div>

    </AccountWidget>
  )
}

export default Account
