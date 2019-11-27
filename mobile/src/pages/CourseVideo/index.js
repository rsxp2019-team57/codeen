import React from "react";
import { View, Text } from "react-native";

import { Background } from "~/components/global";
// import { Container } from './styles';
import VideoPlayer from "~/components/VideoPlayer";

function CourseVideo() {
  return (
    <Background>
      <VideoPlayer />
    </Background>
  );
}

CourseVideo.navigationOptions = {
  title: "Video Aula",
};

export default CourseVideo;
