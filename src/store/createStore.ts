import { applyMiddleware, createStore, Middleware, Reducer } from 'redux';
import { AuthAction, AuthState } from './modules/auth/types';


//Todos os states da store
export interface StoreState {
  auth: AuthState;
}


export type StoreAction = AuthAction;



/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default  (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares)

  return createStore(reducers, enhancer);
}