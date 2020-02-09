/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import { Card, Media } from 'react-bootstrap'
import {MediaBody} from 'react-bootstrap/Media';
import { GiKnifeFork } from 'react-icons/gi';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { useHistory} from 'react-router';
import Jazzicon from 'react-jazzicon';
import MetaJazzicon from '../components/MetaJazzicon';

export const Review = ({address, review, stars, name, token}) => {

  const history = useHistory()

  return (
    <>
      <Card style={{marginTop: '10px', cellPadding: '0px', cellSpacing: '0px', minHeight: '10px'}}>
        <Media style={{marginLeft: '8px', marginRight: '0px', minHeight: '40px', marginTop: '15px'  }}
               onClick={() => history.push('/places/123') } >
          <div style={{marginTop: '7px'}}>
         <MetaJazzicon address={address} diameter={30} />
          </div>

          <Media.Body style={{marginLeft: '10px'}}>
            <strong className={"tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold"}  style={{marginBottom: '0px'}}>{address}</strong>
            <div className={"mg-b-0 tx-12 tx-color-03"} a={""}><Rater total={5} rating={2} interactive={false}/> Foam Guide (15 reviews)</div>
            <p>The prices are below average, the quality level. Tasty and very quickly cooked chicken breast. High-quality alcohol. You can watch football. I didn’t take hookahs, I can’t say anything.</p>
          </Media.Body>
        </Media>


      </Card>
    </>
  )
}
