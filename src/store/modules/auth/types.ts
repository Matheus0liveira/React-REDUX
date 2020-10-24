
import { ActionType } from 'typesafe-actions';

import * as actions from './action';


// Pode conter qualquer tipo que está sendo exportada de dentro de actions;
// Facilitando no IntelliSense;
export type AuthAction = ActionType<typeof actions>

export interface AuthState {
  readonly loadingSignInRequest: boolean;
  readonly isSignedIn: boolean;
  error: boolean;
  token: string | null;
}