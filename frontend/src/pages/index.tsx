import { Auth } from '@/components/Auth/Auth';
import { Chat } from '@/components/Chat/Conversations/Chat';
import { Box } from '@chakra-ui/react';
import { NextPage, NextPageContext } from 'next';
import { getSession, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session } = useSession();

  const reloadSession = () => {};
  console.log(session);
  return (
    <Box>
      {session?.user?.username ? (
        <Chat />
      ) : (
        <Auth session={session} reloadSession={reloadSession} />
      )}
    </Box>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};

export default Home;
