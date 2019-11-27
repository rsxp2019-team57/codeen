import { put } from "redux-saga/effects";

import { setUser } from "../ducks/user/actions";

export function* setProfile({ user }) {
  yield put(setUser(user));
}
