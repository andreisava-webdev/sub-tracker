import { Text } from '@mantine/core';
import { Menu } from '@mantine/core';
import { ActionIcon } from '@mantine/core';
import { Group } from '@mantine/core';
import { Link } from '@remix-run/react';
import { TbUserCircle } from 'react-icons/tb';

export const AppUserMenu = () => {
  return (
    <Menu trigger="hover" width={200}>
      <Menu.Target>
        <Group role="menubar" sx={{ cursor: 'pointer' }} spacing={5}>
          <ActionIcon component={TbUserCircle} color="cyan" size={36} />
          <Text span color="cyan" fw={700}>
            Andrei Sava
          </Text>
        </Group>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item component={Link} to="/profile" color="cyan">
          Profile
        </Menu.Item>
        <Menu.Item component={Link} to="/subscriptions" color="cyan">
          Subscriptions
        </Menu.Item>
        <Menu.Item component={Link} to="/logout" color="red">
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
