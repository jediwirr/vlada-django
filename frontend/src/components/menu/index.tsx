import React, {FC, useState} from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import { IAlbum } from '../../interfaces/album';
import { albumsSelector, parentAlbumsSelector, videoAlbumsSelector } from '../../store/selectors';

import * as S from './styles';

const Menu: FC = () => {
  const [isSubmenuShown, setSubmenuShown] = useState<boolean>(false);
  const imageAlbums: IAlbum[] = useSelector(albumsSelector);
  const videoAlbums: IAlbum[] = useSelector(videoAlbumsSelector);
  const parentAlbums: IAlbum[] = useSelector(parentAlbumsSelector);

  function toggleSubMenu(e) {
    e.preventDefault();
    setSubmenuShown(!isSubmenuShown);
  }

  const SubMenu = () => (
    <S.Container>
      {imageAlbums?.map((item: IAlbum) => item.pk > 1 && item.parent_album && (
        <Link key={item.pk} to={`/albums/${item.pk}`}>
          {item.title.toUpperCase()}
        </Link>
      ))}
      
      <Link to="/" onClick={toggleSubMenu}>НАЗАД</Link>
    </S.Container>
  );


  const MainMenu = () => (
    <S.Container>
      {parentAlbums?.map((item: IAlbum) => (
        <Link key={item.pk} to={'/'} onClick={toggleSubMenu}>
          {item.title.toUpperCase()}
        </Link>
      ))}

      {imageAlbums?.map((item: IAlbum) => item.pk > 1 && !item.parent_album && (
        <Link key={item.pk} to={`/albums/${item.pk}`}>
          {item.title.toUpperCase()}
        </Link>
      ))}

      <Link to="/novels">ТЕКСТЫ</Link>
      
      {videoAlbums?.map((item: IAlbum) => (
        <Link key={item.pk} to={`/videoalbums/${item.pk}`}>
          {item.title.toUpperCase()}
        </Link>
      ))}
    </S.Container>
  );

  return (
    <>
      {
        isSubmenuShown
          ? <SubMenu />
          : <MainMenu />
      }
    </>
  );
};

export default Menu;
