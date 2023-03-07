import styled from '@emotion/styled';
import type { ButtonProps } from '@mantine/core';
import { createPolymorphicComponent } from '@mantine/core';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const _StyledButton = styled(Button)`
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.colors.cyan[6]};
  transition: background 0.5s, color 0.3s ease;

  &.mantine-Button-root:hover {
    background: ${({ theme }) => theme.colors.cyan[6]};
    color: ${({ theme }) => theme.white};
  }
`;

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(
  _StyledButton
);

export const HeroCta = () => {
  return (
    <StyledButton component={Link} to="/auth" mt={50} size="lg">
      Get started now!
    </StyledButton>
  );
};
