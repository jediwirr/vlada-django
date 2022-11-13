import { createAsyncThunk } from '@reduxjs/toolkit';

import albumsService from '../services/AlbumsService';
import videoAlbumsService from '../services/VideosService';

export const getAlbums = createAsyncThunk(
  'albums/getAlbums',
  async () => {
    return await albumsService.fetchAlbums();
  },
);

export const getParentAlbums = createAsyncThunk(
  'albums/getParentAlbums',
  async () => {
    return await albumsService.fetchParentAlbums();
  },
);

export const getVideoAlbums = createAsyncThunk(
  'albums/getVideoAlbums',
  async () => {
    return await videoAlbumsService.fetchAlbums();
  },
);
