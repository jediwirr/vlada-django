import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-size: 1.3em;

  @media (max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutWrapper = styled.div``;

export const Portrait = styled.div`
  width: 100%;
  padding: 1em 2em;

  @media (max-width: 768px){
    padding: 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const ItemWrapper = styled.div`
  padding: 1.2em;
`;

export const Sign = styled.p`
  font-style: italic;
  margin-top: 1.5em;
`;
