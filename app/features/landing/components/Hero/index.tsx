import { LandingContainer } from '@/components/LandingContainer';
import { Title } from '@mantine/core';
import { Text } from '@mantine/core';
import { Stack } from '@mantine/core';
import { Box } from '@mantine/core';
import { BackgroundImage } from '@mantine/core';
import { HeroCta } from './HeroCta';

export const Hero = () => {
  return (
    <Box w="100%" h={700}>
      <BackgroundImage src="./images/hero-bg.jpg" h="100%">
        <LandingContainer>
          <Stack h="100%" align="center" justify="center">
            <Title order={1} color="#fff" size={48}>
              Keep all your subscriptions in one place
            </Title>
            <Text color="#fff" size={18}>
              SubTracker lets you organize your subscriptions and helps you
              avoid unnecessary payments.
            </Text>

            <HeroCta />
          </Stack>
        </LandingContainer>
      </BackgroundImage>
    </Box>
  );
};
