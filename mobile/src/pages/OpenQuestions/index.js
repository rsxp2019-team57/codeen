import React, { useEffect, useState } from "react";

import { Container, Question, QuestionText } from "./styles";

import api from "~/services/api";

export default function OpenQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function loadQuestions() {
      const { data } = await api.get("questions/open");

      console.tron.log(data);

      setQuestions(data);
    }

    loadQuestions();
  }, []);

  return (
    <Container>
      {questions.map(question => (
        <Question key={question.id}>
          <QuestionText>{question.question}</QuestionText>
        </Question>
      ))}
    </Container>
  );
}
