import { TextInput } from '@mantine/core';
import { PasswordInput } from '@mantine/core';
import { Text } from '@mantine/core';
import { Anchor } from '@mantine/core';
import { Button } from '@mantine/core';
import { Stack } from '@mantine/core';
import { Link } from '@remix-run/react';
import { useFetcher } from 'react-router-dom';
import { AuthTitle } from './AuthTitle';

type Props = {
  mode: 'login' | 'register';
};

export const AuthForm = ({ mode }: Props) => {
  const auth = useFetcher();

  return (
    <auth.Form method="post">
      <AuthTitle label={mode === 'login' ? 'Sign in' : 'Create account'} />

      <Stack mt={20}>
        {mode === 'register' && (
          <>
            <TextInput name="firstName" placeholder="First name" />
            <TextInput name="lastName" placeholder="Last name" />
          </>
        )}

        <TextInput type="email" name="email" placeholder="Email" />
        <PasswordInput name="password" placeholder="Password" />

        {mode === 'register' && (
          <PasswordInput
            name="confirmPassword"
            placeholder="Confirm password"
          />
        )}

        <Button>{mode === 'login' ? 'Sign in' : 'Create account'}</Button>
        {mode === 'login' ? (
          <Text align="left">
            Don't have an account?{' '}
            <Anchor component={Link} to="/auth?mode=register" fw={700}>
              Create one
            </Anchor>
          </Text>
        ) : (
          <Text align="left">
            Already have an account?{' '}
            <Anchor component={Link} to="/auth?mode=login" fw={700}>
              Sign in
            </Anchor>
          </Text>
        )}
      </Stack>
    </auth.Form>
  );
};
