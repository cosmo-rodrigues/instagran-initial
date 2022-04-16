import styled from 'styled-components';

export const SectionContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 5px;
  width: 100%;
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
  height: 30px;
  line-height: 18px;
  margin: 16px auto;
  min-width: 230px;
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
`;
