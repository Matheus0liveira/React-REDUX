import { ActionType } from 'typesafe-actions';
import * as actions from './action';



// Tem que está apenas conectada com a action do mulule auth
export function signIn({payload}: ActionType<typeof actions.signInRequest>) {



  try {

    const { email, password }  = payload;
    
    
  } catch (error) {
    
  }
}