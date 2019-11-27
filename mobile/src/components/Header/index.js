import React from "react";

import { Container, Title, Avatar } from "./styles";

export default function Header() {
  return (
    <Container>
      <Title>CODEEN</Title>
      <Avatar
        source={{
          uri:
            "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
        }}
      />
    </Container>
  );
}
