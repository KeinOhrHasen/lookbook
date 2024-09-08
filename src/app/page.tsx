import { HomeContent } from '../core/components';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <main>
        <HomeContent></HomeContent>
      </main>
    );
  }
  return (
    <main>
      <HomeContent></HomeContent>
    </main>
  );
}
