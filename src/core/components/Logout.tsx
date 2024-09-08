'use client';

import { Button } from '@/components/ui/button';
import federatedLogout from '@/src/core/utils/federatedLogout';

export default function Logout() {
  return <Button onClick={() => federatedLogout()}>Logout</Button>;
}
