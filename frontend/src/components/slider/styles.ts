import styled from '@emotion/styled';

type Props = {
  isPrevShown?: boolean;
  isNextShown?: boolean;
  shevronSide: 'left' | 'right';
}

export const Shevron = styled.div<Props>`
  position: absolute;
  font-size: 2em;
  color: #C4C6CA;
  cursor: pointer;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  transition: all .5s ease;

  &:hover{
    font-size: 5em;
    opacity: .2;
    color: #B0B0B0;
  }

  opacity: ${props => 
    props.shevronSide === 'left' 
      ? props.isPrevShown ? '1' : '0' 
      : props.isNextShown ? '1' : '0'};
  
  ${props => 
    props.shevronSide === 'left' 
      ? 'left: 0;' 
      : `
          right: 0; 
          justify-content: flex-end;
        `}
`;

export const Slide = styled.div<{ isVideo?: boolean }>`
  margin: 0 2em;
  width: 100%;
  height: 100vh;
  ${props => props.isVideo && 'z-index: 8;'}
`;

export const Slider = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
