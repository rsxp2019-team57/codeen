import React from "react";
import { View, Text } from "react-native";

import CourseDetail from "~/components/CourseDetail";
import { Background } from "~/components/global";

function Course({ navigation }) {
  return (
    <Background>
      <CourseDetail navigation={navigation} />
    </Background>
  );
}

Course.navigationOptions = {
  title: "Tópicos do Curso",
};

export default Course;
