import { Group } from '@mantine/core';
import { LandingContainer } from '@/components/LandingContainer';
import { HeaderBrand } from './HeaderBrand';
import { HeaderNav } from './HeaderNav';

export const Header = () => {
  return (
    <LandingContainer role="header">
      <Group position="apart" py={10}>
        <HeaderBrand />

        <HeaderNav />
      </Group>
    </LandingContainer>
  );
};
