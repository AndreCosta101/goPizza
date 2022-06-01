import React from 'react';

import { Input } from '@components/Input'
import { Container } from './styles';
import { Button } from '@components/Button';

const SignIn: React.FC = () => {

  // const [isLoading, setIsloading] = setState()


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

      <Button 
        type='secondary'
        // isLoading
        title="título"
      />

    </Container>
  )
}

export {SignIn } ;