import React from 'react';
import { KeyboardAvoidingView, Platform} from 'react-native';

import brandImg from '@assets/brand.png';

import { Input } from '@components/Input'
import { 
  Container, 
  Content, 
  Title, 
  Brand,
  ForgotPasswordLabel,
  ForgotPasswordButton
} from './styles';
import { Button } from '@components/Button';

const SignIn: React.FC = () => {

  // const [isLoading, setIsloading] = setState()


  return (
    <Container>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        <Content>

          <Brand source={brandImg} />

          <Title>Login</Title>

          <Input 
            placeholder='E-mail'
            type='secondary'
            autoCorrect={false}
            autoCapitalize='none'
          />

          <Input 
            placeholder='Senha'
            type='secondary'
            secureTextEntry
          />

          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button 
            type='secondary'
            // isLoading
            title="Entrar"
          />

        </Content>

      </KeyboardAvoidingView>

    </Container>
  )
}

export {SignIn } ;