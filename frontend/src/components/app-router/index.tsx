import React, { useEffect } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Home from '../../screens/HomeScreen';
import Texts from '../../screens/TextsScreen';
import AlbumView from '../../screens/AlbumView';


import { getAlbums, getParentAlbums, getVideoAlbums } from '../../store/actions';
import { AppDispatch } from '../../store';
import { albumsSelector, isLoadingSelector, videoAlbumsSelector } from '../../store/selectors';
import { IAlbum } from '../../interfaces/album';

const AppRouter = () => {
  const dispatch: AppDispatch = useDispatch();
  const imageAlbums: IAlbum[] = useSelector(albumsSelector);
  const videoAlbums: IAlbum[] = useSelector(videoAlbumsSelector);

  useEffect(() => {
    dispatch(getAlbums());
    dispatch(getVideoAlbums());
    dispatch(getParentAlbums());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {imageAlbums?.map(item => (
            <Route 
              key={item.pk} 
              path={`/albums/${item.pk}`} 
              element={
                <AlbumView album={item} />
              } 
            />
          ))}
          {videoAlbums?.map(item => (
            <Route
              key={item.pk}
              path={`/videoalbums/${item.pk}`}
              element={
                <AlbumView album={item} video />
              }
            />
          ))}
          <Route path="/novels" element={<Texts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
