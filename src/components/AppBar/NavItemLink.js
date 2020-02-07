/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default ({ to, label, pathname }) => {
  const linkColor = pathname
    ? pathname.startsWith(to)
      ? '#000'
      : '#858585'
    : '#858585'
  return (
    <Nav.Item bsPrefix={'nav-link'}>
      <Link to={to} style={{ color: linkColor }}>
        {label}
      </Link>
    </Nav.Item>
  )
}
