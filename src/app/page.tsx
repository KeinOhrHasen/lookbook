import { HomeContent } from '../../components/shared';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Login from '../../components/shared/Login';
import Logout from '../../components/shared/Logout';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <div>
        <div>Your name is {session.user?.name}</div>
        <div>
          <Logout />
        </div>

        <main>
          <HomeContent></HomeContent>
        </main>
      </div>
    );
  }
  return (
    <div>
      <Login />
    </div>
  );
}
