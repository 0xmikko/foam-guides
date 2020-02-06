/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

// Updating state immutable

export const updateState = (oldState, newValues) => ({
  ...oldState,
  ...newValues,
})
