/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react'
import { Button, Form } from 'react-bootstrap'

import InputField from './InputField'
import SelectField from './SelectField'

const renderField = (field, values, errors, handleChange) => {
  const inputProps = {
    name: field.field,
    type: field.type || 'text',
    title: field.name,
    sm: field.sm || 12,
    editable: field.editable,
    key: field.field,
    values,
    handleChange,
    errors,
  }

  switch (field.type) {
    default:
    case 'text':
    case 'password':
    case 'Address':
      return <InputField {...inputProps} />

    case 'select':
      return <SelectField {...inputProps} />

    case 'textarea':
      return <InputField {...inputProps} as={'textarea'} />

    // case 'checkbox':
    //   return <CheckBoxField {...inputProps} />
  }
}

export default (fieldList, submitLabel, submitDisabled) => {
  return ({ handleSubmit, handleChange, values, errors }) => {
    const fields = fieldList.map(f =>
      renderField(f, values, errors, handleChange)
    )

    return (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Row>{fields}</Form.Row>
        <Button
          type="submit"
          disabled={submitDisabled}
          style={{
            marginRight: 10,
            backgroundColor: '#43cd30',
            borderColor: '#43cd30',
            color: '#FFF',
          }}
        >
          {submitLabel || 'Save'}
        </Button>
      </Form>
    )
  }
}
