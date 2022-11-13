import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '.';

const selectSelf = (state: RootState) => state.albums;
export const albumsSelector = createSelector(selectSelf, state => state.albums);
export const parentAlbumsSelector = createSelector(selectSelf, state => state.parentAlbums);
export const videoAlbumsSelector = createSelector(selectSelf, state => state.videoAlbums);
export const isLoadingSelector = createSelector(selectSelf, state => state.loading);
