import { action } from 'typesafe-actions';

const SignInRequest = (
  { email, password}: {email: string, password: string}) => {

    return action('@auth/SIGN_IN_REQUEST',{
      email,
      password
    })

};


export default SignInRequest;


