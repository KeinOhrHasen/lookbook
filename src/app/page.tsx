import { HomeContent } from '../core/components';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { StoreProvider } from '../core/providers/StoreProvider';

export default async function Home() {
  const session = await getServerSession(authOptions);

  const appContent = (
    <main>
      {/* <StoreProvider> */}
      <HomeContent></HomeContent>
      {/* </StoreProvider> */}
    </main>
  );

  if (session) {
    return appContent;
  }

  return appContent;
}
