'use client';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export default function Login() {
  return <Button onClick={() => signIn('keycloak')}>Login</Button>;
}
