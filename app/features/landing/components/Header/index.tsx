import { Group } from '@mantine/core';
import { LandingContainer } from '@/components/LandingContainer';
import { HeaderNav } from './HeaderNav';
import { Brand } from '@/components/Brand';

export const Header = () => {
  return (
    <LandingContainer role="header">
      <Group position="apart" py={20}>
        <Brand />

        <HeaderNav />
      </Group>
    </LandingContainer>
  );
};
