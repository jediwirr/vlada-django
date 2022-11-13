import React, {FC, useState} from 'react';

import {Link} from 'react-router-dom';

import Menu from '../menu';

import * as S from './styles';

const GalleryHeader: FC = () => {
  const [menuIsShown, setMenuIsShown] = useState<boolean>(false);

  function toggleMenu(e) {
    e.preventDefault();
    setMenuIsShown(!menuIsShown);
  }
    
  return (
    <>
      <S.Header>
        <a href="/gallery" onClick={toggleMenu}>WORKS</a>
        <span>VLADA</span>
        <Link to="/">ABOUT</Link>
      </S.Header>

      {
        menuIsShown
          ? <Menu />
          : null
      }
    </>
  );
};

export default GalleryHeader;
