import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import Question from "./Question";

const FAQ = () => {
  const questions = useLoaderData();
  return (
    <>
      <Header />
      <div>
        {questions.map((q) => (
          <Question key={q.ide} q={q} />
        ))}
      </div>
    </>
  );
};

export default FAQ;
