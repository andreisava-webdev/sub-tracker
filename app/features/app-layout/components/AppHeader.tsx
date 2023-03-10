import { Brand } from '@/components/Brand';
import { MainContainer } from '@/components/MainContainer';
import { Box } from '@mantine/core';
import { Group } from '@mantine/core';
import { AppUserMenu } from './AppUserMenu';

export const AppHeader = () => {
  return (
    <Box sx={(theme) => ({ backgroundColor: theme.colors.cyan[0] })}>
      <MainContainer>
        <Group py={20} position="apart">
          <Brand />

          <AppUserMenu />
        </Group>
      </MainContainer>
    </Box>
  );
};
