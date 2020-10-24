import React, { FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/action';

import { Form, ContentWrapper } from './styles';

const Login: React.FC = () => {
  const { token, loadingSignInRequest } = useSelector(
    (state: StoreState) => state.auth
  );

  console.log('token', token);

  const dispatch = useDispatch();

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <h1>Login</h1>

      <ContentWrapper>
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" id="email" />
      </ContentWrapper>

      <ContentWrapper>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </ContentWrapper>

      <ContentWrapper>
        <button
          type="submit"
          onClick={() =>
            dispatch(
              signInRequest({ email: 'matheus@mail.com', password: '12345678' })
            )
          }
        >
          {loadingSignInRequest ? 'Carregando' : 'Entrar'}{' '}
        </button>
      </ContentWrapper>
    </Form>
  );
};

export default Login;
