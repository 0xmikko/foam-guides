/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React, { useState } from 'react'
import { Card, Form, InputGroup, Button } from 'react-bootstrap'
import { Redirect } from 'react-router'

export const SearchBarWidget = ({ history, prefix, title, placeholder }) => {
  const [searchInput, setSearchInput] = useState('')
  const searchPress = () => {
    console.log(searchInput)
    history.push(`${prefix}search/${searchInput}`)
  }

  const onSearchLineChanged = e => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }

  return (
    <Card>
      <Card.Body style={{ backgroundColor: '#FFFFFF' }}>
        <h4>{title}</h4>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder={placeholder}
            onChange={onSearchLineChanged}
            value={searchInput}
          />
          <InputGroup.Append>
            <Button
              variant="primary"
              onClick={searchPress}
              style={{ backgroundColor: '#fed809', borderColor: '#fed809', color: "#000"  }}
            >
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
    </Card>
  )
}

export default SearchBarWidget
