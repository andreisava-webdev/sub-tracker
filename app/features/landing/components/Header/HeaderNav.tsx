import { Anchor } from '@mantine/core';
import { Button } from '@mantine/core';
import { Group } from '@mantine/core';
import { Link } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <Group role="navigation">
      <Anchor component={Link} to="/auth?mode=login" fw={700} color="cyan">
        Login
      </Anchor>
      <Button
        component={Link}
        to="/auth?mode=register"
        variant="gradient"
        gradient={{ from: 'cyan', to: 'orange', deg: 20 }}
        color="orange"
      >
        Register
      </Button>
    </Group>
  );
};
