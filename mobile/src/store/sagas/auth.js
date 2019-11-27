import { Alert } from "react-native";
import { call, put } from "redux-saga/effects";
import api from "~/services/api";

import { signInSuccess, signFailure } from "../ducks/auth/actions";

export function* signIn({ email: username, password }) {
  try {
    const { data } = yield call(api.post, "login", {
      username,
      password,
    });

    const { user } = data;

    yield put(signInSuccess(user));
  } catch (error) {
    Alert.alert("Falha na autenticação", "Verifique seus dados!");
    yield put(signFailure());
  }
}

export function* signUp({ name, email, password }) {
  try {
    yield call(api.post, "users", {
      name,
      email,
      password,
    });
    Alert.alert("Cadastro", "Usuário criado com sucesso!");
  } catch (error) {
    Alert.alert("Falha no cadastro", "Verifique seus dados!");

    yield put(signFailure());
  }
}

export function singOut() {}
