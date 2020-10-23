import React from 'react';

import { Form, ContentWrapper } from './styles';


const Login: React.FC = () => {
  return (
    <Form>  

        <h1>Login</h1>
      
        <ContentWrapper>
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email"/>
        </ContentWrapper>

        <ContentWrapper>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"/>
        </ContentWrapper>
        
        <ContentWrapper>
          <button type="submit">ENTRAR</button>
        </ContentWrapper>

    </Form>
  );
};

export default Login;
