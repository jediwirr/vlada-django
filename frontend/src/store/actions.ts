import { createAsyncThunk } from '@reduxjs/toolkit';

import albumsService from '../services/AlbumsService';
import videoAlbumsService from '../services/VideosService';

export const getAlbums = createAsyncThunk(
  'albums/getAlbums',
  async (_, thunkAPI) => {
    return await albumsService.fetchAlbums();
  },
);

export const getParentAlbums = createAsyncThunk(
  'albums/getParentAlbums',
  async (_, thunkAPI) => {
    return await albumsService.fetchParentAlbums();
  },
);

export const getVideoAlbums = createAsyncThunk(
  'albums/getVideoAlbums',
  async (_, thunkAPI) => {
    return await videoAlbumsService.fetchAlbums();
  },
);
