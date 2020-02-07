/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */
import React from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import { fromNow } from '../../utils/humandate'
import EthLink from '../../components/EthLink'
import WindowWidget from '../../components/WindowWidget'
import QueryWrap from '../../components/QueryWrap'

export const ItemsList = ({ data, itemName, renderItem, renderThead }) => {
  const items = data[itemName]

  if (items.length === 0) {
    return (
      <Card>
        <Card.Header>Nothing was found</Card.Header>
      </Card>
    )
  }
  return (
    <Table style={{ margin: 0, width: '100%' }} cellSpacing={0} cellPadding={0}>
      {renderThead}
      <tbody>{items.map(renderItem)}</tbody>
    </Table>
  )
}

export default ({
  query,
  title,
  variables,
  itemName,
  renderItem,
  rightToolbar,
  renderThead,
}) => (
  <>
    <Row>
      <Col sm={9} lg={9}>
        <h2 style={{marginBottom: 8}}>{title}</h2>
      </Col>
      <Col sm={3} lg={3}>
        <div align={'right'} >{rightToolbar}</div>
      </Col>
    </Row>

    <WindowWidget>
      <QueryWrap query={query} variables={variables}>
        <ItemsList
          itemName={itemName}
          renderItem={renderItem}
          renderThead={renderThead}
        />
      </QueryWrap>
    </WindowWidget>
  </>
)
