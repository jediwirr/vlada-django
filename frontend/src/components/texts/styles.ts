import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const TextsMenu = styled.div`
  margin-right: 2em;
  margin-left: 8em;
`;

export const TextsMenuLine = styled.p`
  cursor: pointer;
`;

export const SideBar = styled.div`
  position: fixed;
  display: flex;
  font-size: 3em;
  opacity: .3;
  color: rgb(127, 131, 131);
  cursor: pointer;
  height: 100%;

  &:hover: {
    background-color: #e3e5e7;
  }
`;

export const TextWrapper = styled.div`
  padding: 0 8em;
  margin-left: 3em;;
  width: 50vw;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: .2em;
    padding-left: 1em;
  }
`;

export const TextContent = styled.p`
  font-size: 1.2em;
`;

export const Title = styled.div`
  font-weight: bold;
`;
