import styled from 'styled-components';

export const FooterContainer = styled.footer`
  align-items: center;
  color: #8e8e8e;
  display: flex;
  justify-content: center;
  margin-bottom: 52px;
  padding: 0 16px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
`;

export const FooterLister = styled.ul`
  align-items: center;
  display: flex;
  font-size: 12px;
  flex-wrap: wrap;
  justify-content: center;
  line-height: 20px;
  list-style-type: none;
  max-width: 300px;
  padding: 0 10px;
  width: 100%;

  & + ul {
    margin-bottom: 20px;
    margin-top: 10px;
  }

  @media (min-width: 450px) {
    width: 100%;
    max-width: 100vw;
  }
`;

export const ListItem = styled.li`
  flex: 0 0 auto;
  margin-left: 10px;
`;

export const SelectContainer = styled.div`
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  display: flex;
  justify-content: center;

  p {
    margin-left: 16px;
  }
`;

export const SelectItem = styled.select`
  border: none;
  color: #8e8e8e;
  margin: 12px 0;
  outline: none;
`;

export const OptionItem = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
`;
