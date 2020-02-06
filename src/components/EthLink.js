/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { connect } from 'redux'

export default ({ id, label, prefix, shorten }) => (
  <>
    {label} <a href={prefix + id}>{shorten ? id.substr(0, 22) + '...': id}</a>
  </>
)
