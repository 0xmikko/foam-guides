/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */



import Geohash from 'latlon-geohash';

export function getPointCoordsFromHash(geohash) {
  const coords = Geohash.decode(geohash);
  return [coords['lon'], coords['lat']];
}
