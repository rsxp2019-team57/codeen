import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "react-native";

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from "../styles";

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const { loading } = useSelector(state => state.auth);

  function handleSubmit() {
    dispatch(singUpRequest(name, email, password));
  }

  return (
    <Container>
      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome completo"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}
        />

        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          returnKeyType="next"
          blurOnSubmit={false}
          ref={emailRef}
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Digite sua senha"
          returnKeyType="send"
          ref={passwordRef}
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />

        <SubmitButton loading={loading} onPress={handleSubmit}>
          Criar conta
        </SubmitButton>
      </Form>

      <SignLink onPress={() => navigation.navigate("SignIn")}>
        <SignLinkText>Já tenho conta</SignLinkText>
      </SignLink>
    </Container>
  );
}
