/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';
import Rater from 'react-rater';
import {BeatLoader} from 'react-spinners';
import {FaCheckCircle} from 'react-icons/fa';

import BoxWrapper from '../components/BoxWrapper';
import FormikForm from '../components/Forms/FormikForm';

import * as Yup from 'yup';

import * as actions from '../store/actions';
import * as reducers from '../store/reducers';
import * as statuses from '../store/utils/status';

function ReviewWriteModal({
  show,
  onHide,
  postReview,
  place,
  boxPostStatus,
  getReviews,
}) {
  const {id, name} = place;

  const [status, setStatus] = useState('READY');
  const [updateHash, setUpdateHash] = useState(0);
  const [rating, setRating] = useState(5);

  const fields = [
    {
      name: 'Review',
      field: 'review',
      title: 'Your review',
      type: 'textarea',
      validation: Yup.string().required('Required'),
    },
  ];

  useEffect(() => {
    if (
      updateHash !== 0 &&
      status === 'SUBMITTING' &&
      boxPostStatus[updateHash] === statuses.STATUS_SUCCESS
    ) {
      setStatus('DONE');
      getReviews(id);
      setUpdateHash(0);
      setTimeout(() => onHide(), 1500);
    }
  });

  const onSubmit = values => {
    setStatus('SUBMITTING');
    const updateHash = Date.now();
    setUpdateHash(updateHash);
    postReview(id, {rating, ...values}, updateHash);
  };

  let body;

  switch (status) {
    case 'READY':
      body = (
        <BoxWrapper>
          <Rater total={5} rating={rating} onRate={e => setRating(e.rating)} />
          <FormikForm
            fieldList={fields}
            initialValues={{}}
            onSubmit={onSubmit}
            submitLabel={'Post'}
          />
        </BoxWrapper>
      );
      break;
    case 'SUBMITTING':
      body = (
        <div
          style={{
            width: '100%',
            height: '80px',
            textAlign: 'center',
            marginTop: '20px',
          }}>
          <BeatLoader size={15} margin={5} loading={true} color={'#157ffb'}/>
        </div>
      );
      break;
    case 'DONE':
      body = (
        <div
          style={{
            width: '100%',
            height: '80px',
            textAlign: 'center',
            marginTop: '20px',
          }}>
          <FaCheckCircle size={'4em'} color={'#4cd23d'} />
        </div>
      );
      break;
  }

  return (
    <Modal show={show} onHide={onHide} centered={true}>
      <Modal.Header closeButton>
        <Modal.Title>Write a review for {name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
}

const mapStateToProps = state => ({
  boxAccount: reducers.boxAccount(state),
  boxPostStatus: reducers.boxPostStatus(state),
});

const mapDispatchToProps = dispatch => ({
  postReview: (listingHash, data, updateHash) =>
    dispatch(actions.postReview(listingHash, data, updateHash)),
  getReviews: listingHash => dispatch(actions.openThread(listingHash)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewWriteModal);
