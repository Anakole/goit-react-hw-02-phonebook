import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  padding: 30px;
  margin-bottom: 30px;
  background-color: #d8e7e7;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 250px;
  height: 20px;
  margin-left: 10px;
`;

export const Button = styled.button`
  width: 120px;
  height: 30px;
  margin: auto;
  border: none;
  background-color: #3d3d3d;
  text-transform: uppercase;
  font-size: 12px;
  color: #d8e7e7;

  &:hover,
  &:active {
    background-color: white;
    color: #3d3d3d;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
