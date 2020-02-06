import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import Web3Wrapper from '../components/Web3Wrapper'

const MapScreen = () => (
    <>
        <Helmet>
            <title>MapScreen</title>
        </Helmet>
        {/*<Web3Wrapper>*/}
            <Container fluid={true} style={{ marginTop: 20 }}>
                <Row >
                    <Col sm={12}>
                        <h1 style={{ marginBottom: 10 }}>MapScreen</h1>
                    </Col>
                </Row>
            </Container>
        {/*</Web3Wrapper>*/}
    </>
)

export default MapScreen
