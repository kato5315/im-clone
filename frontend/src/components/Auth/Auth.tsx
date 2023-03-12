import { Button, Center, Stack, Text, Image, Input } from '@chakra-ui/react';
import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import * as React from 'react';
import { useState } from 'react';

type Props = {
  session: Session | null;
  reloadSession: () => void;
};

export const Auth: React.FC<Props> = ({ session, reloadSession }) => {
  const [username, setUsername] = useState<string>('');

  return (
    <Center height="100vh" border="1px solid red">
      <Stack spacing={8} align="center">
        {session ? (
          <>
            <Text fontSize="3xl">Create a Username</Text>
            <Input
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <Button width="100%">Save</Button>
          </>
        ) : (
          <>
            <Text fontSize="3xl">MessageQL</Text>
            <Button
              onClick={() => signIn('google')}
              leftIcon={
                <Image height="20px" alt="logo" src="/images/googlelogo.png" />
              }
            >
              Continue with Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};
