import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhotoWrapper = styled.div`
  width: 60%;
  height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
