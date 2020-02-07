/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import { Col, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

export const InputField = ({
  sm,
  title,
  as,
  type,
  name,
  values,
  editable,
  handleChange,
  errors,
}) => (
  <Form.Group as={Col} md={sm}>
    <Form.Label>{title}</Form.Label>
    <Form.Control
      as={as}
      type={type}
      name={name}
      value={values[name] || ""}
      onChange={handleChange}
      isInvalid={!!errors[name]}
      readOnly={editable === undefined ? false : !editable}
    />
    <Form.Control.Feedback type="invalid">{errors[name]}</Form.Control.Feedback>
  </Form.Group>
)

InputField.propTypes = {
  title: PropTypes.string.isRequired,
  sm: PropTypes.number,
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
}

export default InputField
