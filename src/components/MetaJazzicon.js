/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */
import React from 'react';
import Jazzicon from 'react-jazzicon';

function MetaJazzicon(props) {
  const { address } = props
  if (address === undefined) {
    console.warn("Address is not specified for MetaJazzicon")
    return ""
  }
  const addr8hex = address.replace('0x', '').slice(0, 8)
  const jazziconSeed = parseInt(addr8hex, 16)
  return  <Jazzicon seed={jazziconSeed} {...props}/>
}

export default MetaJazzicon
