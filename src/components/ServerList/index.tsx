import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome/>

      <Separator/>

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton  />
      <ServerButton mentions={3}/>
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={72}/>
      <ServerButton />
      <ServerButton  mentions={345}/>
      <ServerButton />
    </Container>
  );
};

export default ServerList; 