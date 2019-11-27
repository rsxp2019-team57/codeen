import React from "react";

import { Container, Icon, Title } from "./styles";

export default function ListItem({ title, color, id, navigation }) {
  function handleNavigate(id) {
    navigation.navigate("CourseVideo", { id });
  }
  return (
    <Container color={color} onPress={() => handleNavigate(id)}>
      <Icon
        source={{
          uri:
            "https://images.vexels.com/media/users/3/157346/isolated/preview/25829f6b8d6ca72aee817a8448ab7024-flat-open-book-icon-by-vexels.png",
        }}
      />
      <Title>{title}</Title>
    </Container>
  );
}
