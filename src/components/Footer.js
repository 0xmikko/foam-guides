/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import './Footer.css'
import logo from '../logo.png'

export default () => (
  <footer className="footer navbar-fixed-bottom">
    <Container fluid style={{ backgroundColor: '#FFFFFF', height: 110 }}>
      <Container style={{ paddingTop: 20 }}>
        <Row>
          <Col sm={6} lg={6}>
            <Image
              src={logo}
              alt={'logo'}
              height={40}
              style={{ marginBottom: 10 }}
            />
            <br />
            Erascan 2019 © Mikhail Lazarev, All rights reserved
          </Col>
          <Col sm={6} lg={3}>
            <div style={{ marginTop: 0 }}>
              <a
                href="https://github.com/MikaelLazarev/erascan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <br />
              <a
                href="https://github.com/erasureprotocol/erasure-protocol"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
              <br />
              <a href="https://erasure.xxx" target="_blank">
                Erasure protocol
              </a>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <a href="https://erasure.xxx" target="_blank">
              Contact
            </a>
            <br />
            <div style={{ marginTop: 20 }}>
              {/*<a href="https://github.com/MikaelLazarev/erascan">*/}
              {/*  <FontAwesomeIcon*/}
              {/*    icon={['fab', 'github']}*/}
              {/*    size={'lg'}*/}
              {/*    color={'black'}*/}
              {/*  />*/}
              {/*</a>*/}
              {/*{'    '}*/}
              {/*<a href="https://t.me/@mikael_l">*/}
              {/*  <FontAwesomeIcon icon={['fab', 'telegram']} size={'lg'} />*/}
              {/*</a>*/}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  </footer>
)
