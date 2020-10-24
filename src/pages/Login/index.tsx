import React, { FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import SignInRequest from '../../store/modules/auth/action';

import { Form, ContentWrapper } from './styles';


const Login: React.FC = () => {

  const { loadingSignInRequest }  = useSelector((state: StoreState) => state.auth);


  console.log('LOADING', loadingSignInRequest);

 const dispatch = useDispatch();


 const handleFormSubmit = (event: FormEvent) => {
   event.preventDefault();
 }

  return (
    <Form onSubmit={handleFormSubmit}>   

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
          <button type="submit" onClick={() => dispatch(SignInRequest({ email: 'matheus@mail.com', password: '123456'}))}>ENTRAR</button>
        </ContentWrapper>

    </Form>
  );
};

export default Login;
