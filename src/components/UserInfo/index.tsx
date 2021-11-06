import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon, } from './styles';

const Userinfo: React.FC = () => {
  return(
  <Container>

   <Profile>
      <Avatar />
      <UserData>
        <strong>Nabil</strong>
        <span>#2007</span>
      </UserData>
   </Profile>

    <Icons>
      <MicIcon />
      <HeadphoneIcon />
      <SettingsIcon />
    </Icons>
  </Container>
  );
  };

export default Userinfo;