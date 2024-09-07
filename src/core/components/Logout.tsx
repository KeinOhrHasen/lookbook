'use client';

import federatedLogout from '@/src/core/utils/federatedLogout';

export default function Logout() {
  return <button onClick={() => federatedLogout()}>Logout</button>;
}
