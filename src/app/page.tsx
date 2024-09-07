import { HomeContent } from '../core/components';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Login from '../core/components/Login';
import Logout from '../core/components/Logout';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <div>
        {/* <div>Your name is {session.user?.name}</div>
        <div>
          
        </div> */}

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
