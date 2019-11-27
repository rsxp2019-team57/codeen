import React from "react";

import CourseList from "~/components/CourseList";
import { Background } from "~/components/global";

function Dashboard(props) {
  return (
    <Background>
      <CourseList navigation={props.navigation} />
    </Background>
  );
}

Dashboard.navigationOptions = ({ navigation }) => ({
  title: "Cursos",
});

export default Dashboard;
