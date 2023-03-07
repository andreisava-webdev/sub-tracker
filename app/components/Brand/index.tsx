import { Text } from '@mantine/core';
import { Link } from '@remix-run/react';

export const Brand = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Text span fw={700} size={28} color="orange">
        SUB
        <Text span color="cyan">
          TRACKER
        </Text>
      </Text>
    </Link>
  );
};
