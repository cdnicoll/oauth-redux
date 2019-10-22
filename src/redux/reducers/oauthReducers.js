import { SIGN_IN, SIGN_OUT } from '../actions/types'

const INITIAL_STATE = {
  isSignedIn: null,
  userProfile: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userProfile: action.payload};
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userPorfile: {} };
    default:
      return state;
  }
};
