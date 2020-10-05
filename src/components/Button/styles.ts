import styled from 'styled-components';

export const Container = styled.button`
  background: #ff9000;
  color: #fff;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 600;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: '#e68302';
  }
`;