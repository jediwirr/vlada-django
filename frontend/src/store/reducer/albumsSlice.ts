import { createSlice } from '@reduxjs/toolkit';

import { IAlbum } from '../../interfaces/album';
import { getAlbums, getParentAlbums, getVideoAlbums } from '../actions';

export interface AlbumsState {
    albums: IAlbum[];
    parentAlbums: IAlbum[];
    videoAlbums: IAlbum[],
    loading: boolean;
    error: string | null;
}

const initialState = {
  albums: [],
  parentAlbums: [],
  videoAlbums: [],
  loading: false,
  error: null,
} as unknown as AlbumsState;

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAlbums.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getAlbums.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.albums = action.payload;
      });

    builder
      .addCase(getParentAlbums.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getParentAlbums.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.parentAlbums = action.payload;
      });

    builder
      .addCase(getVideoAlbums.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getVideoAlbums.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.videoAlbums = action.payload;
      });
  },
});

export default albumsSlice.reducer;
