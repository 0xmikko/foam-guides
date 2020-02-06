/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import {NETWORK_NAME} from "../config";

export default ({status}) => {

  const messages = {
    noconnect: (
      <div>
        This page requires Web3 provider, but no one was found. <br />Please, connect
        Metamask to continue. If you've connected, please reload this page one more time.
        <br />
        More info:{' '}
        <a href={'https://metamask.io/'} style={{ color: 'white' }}>
          metamask.io
        </a>
      </div>
    ),
    notrinkeby: (
      <div>
        Please switch your network to {NETWORK_NAME} and reload this page.
        <br />
        More info:{' '}
        <a href={'https://metamask.io/'} style={{ color: 'white' }}>
          metamask.io
        </a>
      </div>
    ),
  }

  return (
    <div className="App">
      <Helmet>
        <title>No Web3 Provider</title>
      </Helmet>
      <header className="App-header">{messages[status || 'noconnect']}</header>
    </div>
  )
}
