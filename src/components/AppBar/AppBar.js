/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import {
  Nav,
  Form,
  Navbar,
  Image,
  Container,
} from 'react-bootstrap'
import './AppBar.css'
import logo from '../../logo.png'
import NavItemLink from "./NavItemLink";

const AppBar = ({ location: { pathname }}) => {
  console.log(pathname)
  return (
    <Container fluid >
      <Container>
        <Navbar style={{ textColor: '#000000' }}>
          <Navbar.Brand href="/">
            <Image src={logo} alt={'logo'} height={30} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link style={{ marginLeft: 20 }} />
            </Nav>
            <Nav variant={'right'}>
              <NavItemLink to={'/feeds/'} label={'TRACK RECORD'} pathname={pathname}/>
              <NavItemLink to={'/agreements/'} label={'RECOURSE'} pathname={pathname} />
              <NavItemLink to={'/faucet/'} label={'FAUCET'} pathname={pathname} />

              <Form inline />
              <Nav title="Rinkeby" id="basic-nav-dropdown" alignRight>
                <Nav.Item bsPrefix={'nav-link'}>
                  USER
                </Nav.Item>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  )
}

export default AppBar
