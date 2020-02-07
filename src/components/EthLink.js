/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react'
import { connect } from 'redux'

export default ({ id, label, prefix, shorten }) => (
  <>
    {label} <a href={prefix + id}>{shorten ? id.substr(0, 22) + '...': id}</a>
  </>
)
