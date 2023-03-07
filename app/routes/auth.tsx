import { AuthBrand } from '@/features/auth';
import { Container } from '@mantine/core';

export default function AuthRoute() {
  return (
    <Container size="xs" ta="center" pt={100}>
      <AuthBrand />
    </Container>
  );
}
