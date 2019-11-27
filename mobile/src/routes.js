import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SignUp from "~/pages/Auth/SignUp";
import SignIn from "~/pages/Auth/SignIn";
import Welcome from "~/pages/Welcome";
import Information from "~/pages/Information";
import Dashboard from "~/pages/Dashboard";
import Course from "~/pages/Course";
import CourseVideo from "~/pages/CourseVideo";

import MentorsRanking from "~/pages/MentorsRanking";
import OpenQuestions from "~/pages/OpenQuestions";

function checkRouter(isSigned, Mentor) {
  if (isSigned) {
    if (Mentor) {
      return "Mentors";
    }
    return "Main";
  }
  return "Home";
}

export default (isSigned = false, Mentor = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Home: createSwitchNavigator({ SignIn, SignUp }),
        App: createStackNavigator({
          Welcome,
          Information,
        }),
        Main: createStackNavigator({
          Dashboard,
          Course,
          CourseVideo,
        }),
        Mentors: createSwitchNavigator({
          OpenQuestions,
        }),
      },
      {
        initialRouteName: checkRouter(isSigned, Mentor),
      }
    )
  );
