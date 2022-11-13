import React, { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { IFile } from '../../interfaces/file';
import { API_URL } from '../../services/constants';
import { isLoadingSelector } from '../../store/selectors';
import AboutMain from '../about-main';
import Loader from '../loader';
import Menu from '../menu';

import * as S from './styles';

const Home: FC = () => {
  const [images, setImages] = useState<IFile[]>([]);
  const isLoading: boolean = useSelector(isLoadingSelector);

  const getImages = async () => {
    const album = await (await fetch(`${API_URL}albums/1`)).json();
    setImages(album.files);
  };

  useEffect(() => {
    getImages();
  }, []);

  const resolveContent = useCallback(() => {
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <>
          <S.PhotoWrapper>
            <img src={images[0]?.path} alt="VLADA" />
          </S.PhotoWrapper>
          <Menu />
          <AboutMain imagePath={images[1]?.path} />
        </>
      );
    }
  }, [images, isLoading]);

  return (
    <S.HomeContainer>
      {resolveContent()}
    </S.HomeContainer>
  );
};

export default Home;
