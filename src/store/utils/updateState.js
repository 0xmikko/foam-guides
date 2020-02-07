/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

// Updating state immutable

export const updateState = (oldState, newValues) => ({
  ...oldState,
  ...newValues,
})
