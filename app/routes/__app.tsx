import { AppLayout } from '@/features/app-layout';
import { Outlet } from '@remix-run/react';

export default function AppLayoutRoute() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
