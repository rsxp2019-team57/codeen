import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { Container } from "./styles";
import ListItem from "../ListItem";
import api from "../../services/api";

export default function List({ navigation }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourses();
  }, []);

  async function getCourses() {
    const response = await api.get("/courses");
    setCourses(response.data);
    setLoading(false);
  }

  return (
    <Container>
      {loading ? (
        <ActivityIndicator color="#FFF" size="large" />
      ) : (
        courses.map(course => (
          <ListItem
            key={course.name}
            title={course.name}
            color={course.color}
            navigation={navigation}
            id={course.id}
          />
        ))
      )}
    </Container>
  );
}
