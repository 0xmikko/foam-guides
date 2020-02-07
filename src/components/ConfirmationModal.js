/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
// import * as actions from "../store/actions/modals";
import * as reducers from '../store/reducers'
import * as status from '../status'

class Confirmation extends Component {
  state = {
    hash: 0,
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const hash = this.state.hash
    if (hash === 0) return
    if (this.props.hashUpdates[hash] !== undefined) {
      this.setState({ hash: 0 })
      console.log('C-M2', this.props)
      if (
        this.props.confirmation.data &&
        this.props.confirmation.data.updateData
      )
        this.props.confirmation.data.updateData()
    }
  }

  handleClose = () => {
    this.props.hideConfirmation()
  }

  onAction = () => {
    this.handleClose()
    const hash = this.props.confirmation.data.hashPrefix + Date()
    this.setState({ status: status.STATUS_LOADING, hash: hash })
    this.props.confirmation.data.onAction(hash)
  }

  render() {
    console.log('C-M', this.props.confirmation)
    if (!this.props.confirmation) {
      return ''
    }

    if (!this.props.confirmation.data) return ''
    const data = this.props.confirmation.data
    const show = this.props.confirmation.show

    return (
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Отменить
          </Button>
          <Button variant="danger" onClick={this.onAction}>
            {data.buttonActionName}
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

Confirmation.propTypes = {
  confirmation: PropTypes.object,
  action: PropTypes.func.isRequired,
  hideConfirmation: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  // confirmation: getConfirmation(state),
  // hashUpdates: getHashUpdates(state),
})

const mapDispatchToProps = dispatch => ({
  // hideConfirmation: () => dispatch(actions.hideConfirmation())
})

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)
