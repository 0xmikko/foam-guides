/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Query } from 'react-apollo'

export default ({ query, variables, children }) => (
  <Query query={query} variables={variables}>
    {({ data, error, loading }) => {
      if (error) {
        return error.toString()
      }

      if (loading) {
        return 'Loading'
      }

      if (!data) {
        return 'Nothing was found'
      }

      return React.cloneElement(children, { data })
    }}
  </Query>
)
