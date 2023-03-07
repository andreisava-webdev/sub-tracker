import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { MantineProvider, createEmotionCache } from '@mantine/core';
import RubikFont from '@fontsource/rubik/index.css';
import { theme } from './theme';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Sub Tracker',
  viewport: 'width=device-width,initial-scale=1',
});

export const link: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: RubikFont,
  },
];

createEmotionCache({ key: 'mantine' });

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}
