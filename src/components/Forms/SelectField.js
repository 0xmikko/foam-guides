/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import { Col, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

export const SelectField = props => {
  const options = Object.entries(props.options).map(item => (
    <option value={item[0]}>{item[1]}</option>
  ))

  return (
    <Form.Group as={Col} md={props.sm}>
      <Form.Label>{props.title}</Form.Label>

      <Form.Control
        as={'select'}
        type={props.type}
        name={props.name}
        value={props.values[props.name]}
        onChange={props.handleChange}
        isInvalid={!!props.errors[props.name]}
      >
        {options}
      </Form.Control>

      <Form.Control.Feedback type="invalid">
        {props.errors[props.name]}
      </Form.Control.Feedback>
    </Form.Group>
  )
}

SelectField.propTypes = {
  title: PropTypes.string.isRequired,
  sm: PropTypes.number,
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
}

export default SelectField
