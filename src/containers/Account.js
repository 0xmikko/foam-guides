import React from 'react';
import AccountWidget from '../components/AccountWidget';
import Jazzicon from 'react-jazzicon';
import Media from 'react-bootstrap/Media';
import Box from '3box'

function Account({address}) {

  return (
    <AccountWidget>
      <div style={{marginLeft: 'auto',  marginRight: '0', float: 'right'}}>
        <Media>
          <Media.Body style={{marginRight: '10px'}}>
            <h6>Mikhail Lazarev</h6>
          </Media.Body>
          <Jazzicon diameter={40} seed={'0xA6aA18aE16E000787063A404a44Da3A2AC26aa1c'} />
        </Media>


      </div>

    </AccountWidget>
  )
}

export default Account
