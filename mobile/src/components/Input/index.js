import React, { forwardRef } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, TextInput } from "./styles";

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <TextInput {...rest} ref={ref} />
    </Container>
  );
}

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
