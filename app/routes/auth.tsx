import { Brand } from '@/components/Brand';
import { AuthForm } from '@/features/auth/components/AuthForm';
import { Container } from '@mantine/core';
import { useSearchParams } from '@remix-run/react';
import { useEffect } from 'react';

export default function AuthRoute() {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get('mode');

  useEffect(() => {
    if (!mode || (mode !== 'login' && mode !== 'register')) {
      setSearchParams({ mode: 'login' });
    }
  }, [mode, setSearchParams]);

  return (
    <Container size="xs" ta="center" pt={100}>
      <Brand />

      <AuthForm mode={mode as 'login' | 'register'} />
    </Container>
  );
}
