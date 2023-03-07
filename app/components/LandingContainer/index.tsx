import { Container } from '@mantine/core';

type Props = {
  children: React.ReactNode;
  role?: string;
};

export const LandingContainer = ({ children, role }: Props) => {
  return (
    <Container size="lg" w="100%" role={role}>
      {children}
    </Container>
  );
};
