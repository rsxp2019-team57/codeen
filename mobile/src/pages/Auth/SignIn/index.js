import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Content,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from "../styles";

import { signInRequest } from "~/store/ducks/auth/actions";

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();

  const passwordRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading } = useSelector(state => state.auth);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Content>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            blurOnSubmit={false}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>
      </Content>

      {/* <SignLink onPress={() => navigation.navigate("SignUp")}>
        <SignLinkText>Criar conta</SignLinkText>
      </SignLink> */}
    </Container>
  );
}
