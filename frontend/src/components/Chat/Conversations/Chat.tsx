import { Button } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import * as React from 'react';

type Props = {};

export const Chat: React.FC<Props> = (props) => {
  return (
    <div>
      Chat
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
};
