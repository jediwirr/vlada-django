import React, { FC } from 'react';

import { IAlbum } from '../../interfaces/album';
import GalleryHeader from '../gallery-header';
import Slider from '../slider';

import * as S from './styles';

type Props = {
  album: IAlbum;
  video?: boolean;
};

const AlbumView: FC<Props> = ({ album, video }) => {
  return (
    <S.Container>
      <GalleryHeader />
      <Slider items={album?.files} video={video} />
    </S.Container>
  );
};

export default AlbumView;
