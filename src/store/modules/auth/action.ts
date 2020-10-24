import { action } from 'typesafe-actions';

const SignInRequest = (
  { email, password}: {email: string, password: string}) => {

    return action('@auth/SIGN_IN_REQUEST',{
      email,
      password
    })

};


const SignInSuccess = (
  { token }: {token: string}) => {

    return action('@auth/SIGN_IN_SUCCESS',{
      token
    })

};


export default SignInRequest;


