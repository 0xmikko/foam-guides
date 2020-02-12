/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {connect} from 'react-redux';
import * as reducers from '../store/reducers';
import * as statuses from '../store/utils/status';

function GuideLevel({account, guides}) {
  if (!account && !guides[account]) {
    return '';
  }
  const guideLevel = guides[account];
  if (!guideLevel) {
    return '';
  }
  if (guideLevel.status === statuses.STATUS_FAILURE || !guideLevel.data) {
    return 'Beginner';
  }

  console.log(account, guideLevel);

  const score =
    guideLevel.data.verifiedPOIs * 100 +
    guideLevel.data.pendingPOIs * 20 +
    guideLevel.data.challengedPOIs * 30;

  console.log(account, score)

  if (score < 20) { return "Foam guide (level 1)" }
  if (score < 50) { return "Foam guide (level 2)" }
  if (score < 100) { return "Foam guide (level 3)" }
  return 'Expert';
}

const mapStateToProps = state => ({
  guides: reducers.Guides(state),
});

export default connect(mapStateToProps)(GuideLevel);
