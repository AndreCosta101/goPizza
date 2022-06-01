import React from 'react';

import { Input } from '@components/Input'
import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>

      <Input 
        placeholder='E-mail'
        type='secondary'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <Input 
        placeholder='E-mail'
        type='secondary'
        secureTextEntry
      />

    </Container>
  )
}

export {SignIn } ;