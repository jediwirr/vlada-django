import React, { useState, useEffect, FC } from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';

import { IFile } from '../../interfaces/file';

import * as S from './styles';

type Props = {
  items: IFile[];
  video?: boolean;
};

const Slider: FC<Props> = ({ items, video }) => {
  const [index, setIndex] = useState<number>(0);
  const [isNextShown, setNextShown] = useState<boolean>(false);
  const [isPrevShown, setPrevShown] = useState<boolean>(false);

  useEffect(() => {
    if (items.length < 2) {
      setNextShown(false);
    } else {
      setNextShown(true);
    }

    if (index === 0) {
      setPrevShown(false);
    } else if (index === items.length - 1) {
      setNextShown(false);
    }
  }, [index, items.length]);

  const nextSlide = () => {
    if (index < items.length - 1) {
      setIndex(index + 1);
      setPrevShown(true);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
      setNextShown(true);
    }
  };

  return (
    <S.Slider>
      <S.Shevron
        shevronSide="left"
        isPrevShown={isPrevShown}
        onClick={prevSlide}
      >
        <HiChevronLeft style={{ zIndex: 9 }} />
      </S.Shevron>
      {video ? (
        <S.Slide isVideo>
          <iframe width="100%" height="100%" src={items[index]?.path} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          {/* <video
            width="100%"
            height="100%"
            loop
            preload=""
            autoPlay
            src={items[index]?.path}
          >
            Это видео не может быть воспроизведено в вашем браузере.
          //</video>*/}
        </S.Slide>
      ) : (
        <S.Slide>
          <img src={items[index]?.path} alt="slide"></img>
        </S.Slide>
      )}
      <S.Shevron
        shevronSide="right"
        isNextShown={isNextShown}
        onClick={nextSlide}
      >
        <HiChevronRight style={{ zIndex: 9 }} />
      </S.Shevron>
    </S.Slider>
  );
};

export default Slider;
