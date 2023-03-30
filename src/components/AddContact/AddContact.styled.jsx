import styled from '@emotion/styled';

export const AddContactStyled = styled.form`
  padding: 24px;

  flex-direction: column;
  border-bottom: 2px solid #2e2caa;
  display: flex;
  align-items: center;
`;
export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  justify-content: space-between;
`;

export const Input = styled.input`
  margin-left: 40px;
  padding: 6px;
  border-radius: 12px;
  width: 240px;
`;
export const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  width: 180px;
  border-radius: 30px;
  color: #fff;
  background-color: #2e2caa;
  border: transparent;
  margin-top: 24px;
  cursor: pointer;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
