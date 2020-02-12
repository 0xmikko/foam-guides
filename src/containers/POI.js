/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Card, Media} from 'react-bootstrap';
import {
  FaPallet,
  FaHamburger,
  FaShoppingCart,
  FaMedkit,
  FaIndustry,
  FaGlassMartiniAlt,
  FaLink,
  FaTree,
  FaBuilding,
  FaGraduationCap,
  FaSubway,
  FaChurch,
  FaLandmark,
} from 'react-icons/fa';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import {useHistory} from 'react-router';

export const POI = ({item}) => {
  const history = useHistory();

  console.log(item);

  const icons = {
    Art: <FaPallet size={'2em'} />,
    Food: <FaHamburger size={'2em'} />,
    Retail: <FaShoppingCart size={'2em'} />,
    Health: <FaMedkit size={'2em'} />,
    Work: <FaIndustry size={'2em'} />,
    Nightlife: <FaGlassMartiniAlt size={'2em'} />,
    Blockchain: <FaLink size={'2em'} />,
    Attraction: <FaTree size={'2em'} />,
    Residential: <FaBuilding size={'2em'} />,
    Education: <FaGraduationCap size={'2em'} />,
    Transportation: <FaSubway size={'2em'} />,
    Religion: <FaChurch size={'2em'} />,
    Government: <FaLandmark size={'2em'} />,
  };

  console.log(item.tags[0]);
  const tagIcon = icons[item.tags[0]] || <FaBuilding size={'2em'} />;

  return (
    <>
      <Card
        style={{
          marginTop: '10px',
          cellPadding: '0px',
          cellSpacing: '0px',
          minHeight: '10px',
        }}>
        <Media
          style={{
            marginLeft: '8px',
            marginRight: '0px',
            minHeight: '40px',
            marginTop: '12px',
            alignContent: 'center',
          }}
          onClick={() => history.push(`/places/${item.listingHash}`)}>
          {tagIcon}

          <Media.Body style={{marginLeft: '10px'}}>
            <h6
              className={
                'tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold'
              }
              style={{marginBottom: '0px'}}>
              {item.name}
            </h6>
            <div className={'mg-b-0 tx-12 tx-color-03'} a={''}>
              {item.tags.join(' ')}
            </div>

          </Media.Body>
        </Media>
      </Card>
    </>
  );
};
