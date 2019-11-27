import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${({ color }) => (color ? color : "#7159c1")};
  border-radius: 8px;
  height: 50px;
  width: 300px;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  padding: 0px 15px;
  margin: 0px 0px 15px;
`;

export const Icon = styled.Image`
  height: 30px;
  width: 30px;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 20px;
`;
