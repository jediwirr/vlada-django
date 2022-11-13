import styled from '@emotion/styled';

export const Container = styled.div`
  margin-bottom: 5em;
  display: flex;
  justify-content: center;
  font-size: 1.5em;

  @media (max-width: 768px){
    flex-direction: column;
  }
`;
