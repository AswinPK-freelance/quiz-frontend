import React, { useEffect, useState } from "react";
import QuestionHeader from "../components/QuestionHeader";
import QuestionCard from "../components/QuestionCard";
import NavigationButtons from "../components/NavigationButtons";
import QuestionNumbers from "../components/QuestionNumbers";
import NotFound from "../components/NotFound";
import { ApiCall } from "../services/apiCall";
import { quizUrl } from "../services/baseUrl";
import SuccesCard from "../components/SuccesCard";

function HomePage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [stage, setStage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getQuiz();
  }, [stage]);

  const getQuiz = async () => {
    const response = await ApiCall("get", quizUrl, null, { stage });
    if (response?.status) {
      setQuestions(response?.message?.data ?? []);
      setSelectedAnswers({});
    }
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSuccess(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleQuestionSelect = (questionNumber) => {
    setCurrentQuestion(questionNumber);
  };

  const handleNextStage = () => {
    setStage(stage + 1);
    setSuccess(false);
    setCurrentQuestion(1);
  };

  const handleBacktoHome = () => {
    setStage(1);
    setSuccess(false);
    setCurrentQuestion(1);
  };

  const handlePreviousStage = () => {
    setStage(stage);
    setCurrentQuestion(1);
    setSuccess(false);
  };

  return (
    <div className="min-h-screen bg-blue-500 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {questions?.length ? (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-8">
              Stage {stage}
            </h2>
            <QuestionHeader
              currentQuestion={currentQuestion}
              totalQuestions={questions.length}
            />

            {success ? (
              <SuccesCard
                handleNextStage={handleNextStage}
                handlePreviousStage={handlePreviousStage}
                stage={stage}
              />
            ) : (
              <>
                <QuestionCard
                  question={questions[currentQuestion - 1]}
                  selectedAnswer={selectedAnswers[currentQuestion]}
                  onAnswerSelect={handleAnswerSelect}
                />

                <NavigationButtons
                  onPrev={handlePrev}
                  onNext={handleNext}
                  showPrev={currentQuestion > 1}
                />

                <QuestionNumbers
                  totalQuestions={questions.length}
                  currentQuestion={currentQuestion}
                  onQuestionSelect={handleQuestionSelect}
                />
              </>
            )}
          </div>
        ) : (
          <NotFound handleBacktoHome={handleBacktoHome} stage={stage} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
