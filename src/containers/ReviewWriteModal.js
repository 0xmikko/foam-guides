/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import BoxWrapper from '../components/BoxWrapper';
import Rater from 'react-rater';
import * as Yup from 'yup';
import FormikForm from '../components/Forms/FormikForm';
import * as reducers from '../store/reducers';
import {connect} from 'react-redux';
import * as actions from '../store/actions';

function ReviewWriteModal({show, onHide, boxAccount}) {
  const fields = [
    {
      name: 'Review',
      field: 'review',
      title: 'Your review',
      type: 'textarea',
      validation: Yup.string().required('Required'),
    },
  ];

  const [rating, setRating] = useState(5);

  const onSubmit = values => {
    const json = JSON.stringify({rating, ...values})
    console.log(json)
    // boxAccount
  }

  return (
    <Modal show={show} onHide={onHide} centered={true}>
      <Modal.Header closeButton>
        <Modal.Title>Write a review</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <BoxWrapper>
          <Rater total={5} rating={rating} onRate={e => setRating(e.rating)}/>
          <FormikForm fieldList={fields} initialValues={{}} onSubmit={onSubmit} />

        </BoxWrapper>
      </Modal.Body>
    </Modal>
  );
}

const mapStateToProps = state => ({
  boxAccount: reducers.boxAccount(state),
});

const mapDispatchToProps = dispatch => ({
  getBoxAccount: () => dispatch(actions.getBoxAccount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewWriteModal);
