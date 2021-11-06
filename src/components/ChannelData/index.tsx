import React, {useRef, useEffect} from 'react';

import ChannelMessage, {Mention} from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as  React.MutableRefObject<HTMLDivElement>;
  
  useEffect (() => {
  const div = messagesRef.current;

if(div ){
  div.scrollTop = div.scrollHeight;   
}
  }, [messagesRef]);
  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>

        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>
        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>
        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>
        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>
        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>
        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>
        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>
        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>
        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>
        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>
        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>
        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>
        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>
        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>
        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>

        <ChannelMessage
        author="Nabil"
        date="04/08/2021"
        content="Hoje e meu aniversario!"/>
        
        <ChannelMessage
        author="Falconiere"
        date="06/011/2021"
        content={
          <>
          <Mention>@Falconiere</Mention>, me carrega no CS de novo por favor? </>
        }
        hasMention
        isBot
        />

    </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Coversar em #chat-livre "/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData; 