/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import { Card } from 'react-bootstrap'

export const WindowWidget = ({ title, rightToolbar, children }) => {
  const header = title ? (
    <Card.Header>
      <table width="100%" cellPadding={0} cellSpacing={0}>
        <tbody>
          <tr valign="center">
            <td>
              <b style={{ margin: '0 0 0 0', fontSize: '16px' }}>{title}</b>
            </td>
            <td align="right">{rightToolbar}</td>
          </tr>
        </tbody>
      </table>
    </Card.Header>
  ) : (
    undefined
  )

  return (
    <Card style={{ backgroundColor: '#FAFBFC' }}>
      {header}
      <Card.Body style={{ padding: 0 }}>
        {children}
      </Card.Body>
    </Card>
  )
}

export default WindowWidget
