import { HomeContent } from '../core/components';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);

  const appContent = (
    <main>
      <HomeContent></HomeContent>
    </main>
  );

  if (session) {
    return appContent;
  }

  return appContent;
}
