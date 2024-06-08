import styled from '@emotion/styled';
import { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick }: ButtonProps) => (
  <ButtonContainer>
    <StyledButton onClick={onClick}>{children}</StyledButton>
  </ButtonContainer>
);

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  min-width: 150px;
  min-height: 50px;
  background-color: #000000;
  color: #ffffff;
`;

export default Button;
