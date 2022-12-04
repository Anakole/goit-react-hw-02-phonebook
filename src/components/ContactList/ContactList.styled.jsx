import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 370px;
  padding: 10px 20px;
  color: #3d3d3d;
  background-color: #d8e7e7;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Button = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  background-color: #3d3d3d;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 1px;
  color: #d8e7e7;

  &:hover,
  &:active {
    background-color: white;
    color: #3d3d3d;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
