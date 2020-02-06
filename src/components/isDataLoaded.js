/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import * as statuses from '../store/utils/status'

export const isDataLoaded = item => {
  if (!item) {
    return 'Loading'
  }
  const { data, status } = item
  if (
    (status === statuses.STATUS_UPDATE_NEEDED ||
      status === statuses.STATUS_LOADING) &&
    !data
  ) {
    return 'Loading'
  }

  if (status === statuses.STATUS_FAILURE) {
    return "Oops! It's a problem connecting server"
  }

  return null
}
