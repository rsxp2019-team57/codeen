import { Types } from "./reducer";

export function signInRequest(email, password) {
  return {
    type: Types.REQUEST,
    email,
    password,
  };
}

export function signInSuccess(user) {
  return {
    type: Types.SUCCESS,
    user,
  };
}
export function singUpRequest(name, email, password) {
  return {
    type: Types.SIGN_UP,
    name,
    email,
    password,
  };
}

export function signFailure() {
  return {
    type: Types.FAILURE,
  };
}

export function signOut() {
  return {
    type: Types.SIGN_OUT,
  };
}
