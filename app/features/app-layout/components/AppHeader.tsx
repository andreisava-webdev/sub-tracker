import { Brand } from '@/components/Brand';
import { MainContainer } from '@/components/MainContainer';
import { Box } from '@mantine/core';
import { Group } from '@mantine/core';

export const AppHeader = () => {
  return (
    <Box sx={(theme) => ({ backgroundColor: theme.colors.cyan[0] })}>
      <MainContainer>
        <Group py={20}>
          <Brand />
        </Group>
      </MainContainer>
    </Box>
  );
};
