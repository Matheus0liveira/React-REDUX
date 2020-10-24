import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import * as actions from './action';
import api from '../../../services/api';



// Tem que está apenas conectada com a action do mulule auth
export function*  signIn({payload}: ActionType<typeof actions.signInRequest>) {



  try {

    const { email, password }  = payload;
    
    const { data } = yield call(api.post, '/auth', { email, password});

  

    yield put(actions.signInSuccess({ token: data.token}));
    
  } catch (error) {

    yield put(actions.signInFailure());
    
  };
};


export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),

]);