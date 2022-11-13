import React, { useState, useEffect, FC } from 'react';

import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';

import { Novel } from '../../interfaces/novel';
import { API_URL } from '../../services/constants';
import GalleryHeader from '../gallery-header';

import * as S from './styles';

const Texts: FC = () => {
  const [data, setData] = useState<Novel[]>([]);
  const [title, setTitle] = useState<string>('');
  const [isShown, setIsShown] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${API_URL}novels/`)
      .then(response => response.json())
      .then(response => {
        setData(response);
      })
      .catch(error => console.warn(error));
  }, []);

  const toggleMenu = (title) => {
    setTitle(title);
    setIsShown(!isShown);
  };

  return (
    <S.Container>
      <GalleryHeader />
      <S.Texts>
        {isShown ?
          <S.TextsMenu>
            {!data ? 'Loading... ' :
              data.map((item: Novel, i: number) => (
                <S.TextsMenuLine onClick={() => toggleMenu(item.title)}>{i + 1}. {item.title}</S.TextsMenuLine>
              ))}
          </S.TextsMenu> : null
        }
        <S.SideBar onClick={() => setIsShown(!isShown)}>
          {isShown ? <HiChevronLeft /> : <HiChevronRight />}
        </S.SideBar>
        {isShown ?
          null :
          <S.TextWrapper>
            {!data ? 'Loading... ' :
              data.map((item: Novel) => (
                <>
                  <S.Title key={item.title}>{item.title === title ? item.title : ''}</S.Title>
                  {item.content.split('\n').map(par => (
                    <S.TextContent>{item.title === title ? par : ''}</S.TextContent>
                  ))}
                </>
              ))
            }
          </S.TextWrapper>
        }
      </S.Texts>
    </S.Container>
  );
};

export default Texts;
