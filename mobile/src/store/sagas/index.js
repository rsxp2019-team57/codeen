import { all, takeLatest } from "redux-saga/effects";

import { Types as AuthTypes } from "../ducks/auth/reducer";

import { signIn, signUp, singOut } from "./auth";
import { setProfile } from "./user";

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP, signUp),
    takeLatest(AuthTypes.SUCCESS, setProfile),
    takeLatest(AuthTypes.SIGN_OUT, singOut),
  ]);
}
