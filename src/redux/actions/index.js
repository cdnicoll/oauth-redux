import { SIGN_IN, SIGN_OUT } from './types'

export const signIn = (userProfile) => {
  return {
    type: SIGN_IN,
    payload: userProfile
  };
};

export const signOut = () => {
    return {
      type: SIGN_OUT,
    };
  };
  