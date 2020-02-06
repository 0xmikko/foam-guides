/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import {Table} from 'react-bootstrap'
import { gql } from 'apollo-boost'
import AddressLink from '../../containers/Address/AddressLink'
import WindowWidget from '../WindowWidget'
import QueryWrap from '../QueryWrap'
import {humanDate} from "../../utils/humandate";

const renderValue = (item, type, field) => {
  switch (type) {
    default:
    case 'String':
      return item[field]
    case 'Address':
      return <AddressLink id={item[field]} />
      case 'Timestamp':
          const timeStamp = item[field]
          return  `${timeStamp} (${humanDate(timeStamp)})`
  }
}

const RenderItem = ({ data, itemName, fields }) => {
  const item = data[itemName]

  const info = fields.map(e => (
    <tr>
      <td width={'25%'}>{e.name}</td>
      <td>
          {renderValue(item, e.type, e.field)}
      </td>
    </tr>
  ))

  return (
    <Table style={{ margin: 0, width: '100%', wordBreak: 'break-all'  }}>
      <tbody>{info}</tbody>
    </Table>
  )



}

export default ({ id, fields, itemName }) => {
  const fieldsLine = fields.map(e => e.field).join('\n')
  const graphQuery = gql`
  query getItem($id: String!) {
    ${itemName}(id: $id) {
     ${fieldsLine}
    }
  }
`
  return (
    <WindowWidget>
      <QueryWrap query={graphQuery} variables={{ id }}>
        <RenderItem fields={fields} itemName={itemName} />
      </QueryWrap>
    </WindowWidget>
  )
}
