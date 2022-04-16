import styled from 'styled-components';

export const FooterContainer = styled.footer`
  color: #8e8e8e;
  margin-bottom: 52px;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const FooterLister = styled.ul`
  align-items: center;
  display: flex;
  font-size: 12px;
  flex-wrap: wrap;
  justify-content: center;
  line-height: 16px;
  list-style-type: none;
  margin: 0 auto;
  max-width: 300px;
  width: 100%;
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
