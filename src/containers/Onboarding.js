/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import {useCookies} from 'react-cookie';
import Media from 'react-bootstrap/Media';

function OnboardingModal() {
  const [showOnboarding, setShowOnboarding] = useCookies(['show']);

  const show = showOnboarding.show !== undefined ? showOnboarding.show === 'true' : true;

  const onHide = () => setShowOnboarding('show', false);

  return (
    <Modal show={show} onHide={onHide} centered={true} size={'lg'}>
      <Modal.Header closeButton centered={true}>
        <Modal.Title>Welcome to Foam Guides</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{marginLeft: '10px', marginRight: '10px'}}>
        Decentralised reviews powered by communities and FOAM maps:
        <Media style={{marginTop: '30px'}} as={'li'}>
          <img
            src={'/images/discuss.png'}
            width={64}
            height={64}
            alt={'discuss'}
            className={'mr-3'}
          />
          <Media.Body>
            <h5 style={{marginBottom: '2px'}}>Get community-driven reviews</h5>
            Get the power of decentralised customer reviews. We arrange reviews
            based on participation of each user to FOAM community.
          </Media.Body>
        </Media>
        <Media style={{marginTop: '24px'}}>
          <img
            src={'/images/rate.png'}
            width={64}
            height={64}
            alt={'discuss'}
            className={'mr-3'}
          />
          <Media.Body>
            <h5 style={{marginBottom: '2px'}}>
              Write reviews & rate companies
            </h5>
            Provide your honest review about place or service you've used. Build
            strong reputation contributing to <a href={'https://map.foam.space/'}>FOAM Maps</a>.
          </Media.Body>
        </Media>
        <Media style={{marginTop: '24px'}}>
          <img
            src={'/images/top.png'}
            width={64}
            height={64}
            alt={'discuss'}
            className={'mr-3'}
          />
          <Media.Body>
            <h5 style={{marginBottom: '2px'}}>
             Become an Expert Guide
            </h5>
             Contribute to FOAM Maps and increase your rating to Expert level. Reviews from more experienced users are shown first.
          </Media.Body>
        </Media>
        <div style={{marginTop: '24px', textAlign: 'center'}}>
          <Button onClick={onHide} style={{width: '80%'}}>
            Ok
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default OnboardingModal;
