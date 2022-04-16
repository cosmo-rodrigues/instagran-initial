import styled from 'styled-components';

export const FigureContainer = styled.figure``;

export const Container = styled.div`
  position: relative;
`;

export const CellphoneImage = styled.img`
  position: fixed;
  left: 11vw;
  top: 5vh;
`;

export const SlideImage = styled.img`
  height: 403px;
  position: fixed;
  left: 25vw;
  top: 8vh;

  @media (min-width: 950px) {
    left: 23.3vw;
  }

  @media (min-width: 1024px) {
    left: 22.4vw;
  }

  @media (min-width: 1350px) {
    left: 19.8vw;
  }

  @media (min-width: 1440px) {
    left: 19.2vw;
  }
`;
