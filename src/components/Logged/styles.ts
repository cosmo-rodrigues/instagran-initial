import styled from 'styled-components';

export const SectionContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 5px;
  width: 100%;

  @media (min-width: 450px) {
    border: 1px solid #ccc;
    background-color: #fff;
    margin-bottom: 8vh;
    margin-top: 8vh;
    max-height: 400px;
    max-width: 350px;
  }
`;

export const LogoFigure = styled.figure`
  margin-bottom: 12px;
  margin-top: 36px;
`;

export const AvatarFigure = styled.figure`
  img {
    border-radius: 100%;
    max-width: 100px;
  }
`;

export const Image = styled.img``;

export const ContinueButton = styled.button`
  background-color: #0095f6;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  height: 50px;
  line-height: 18px;
  margin: 16px auto;
  padding: 7px 20px;
  width: 255px;
`;

export const ChangeAccountButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  color: #0095f6;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;

export const InfoContainer = styled.div`
  text-align: center;

  @media (min-width: 450px) {
    align-items: baseline;
    display: flex;
    justify-content: center;

    p {
      margin-right: 5px;
    }
  }
`;
