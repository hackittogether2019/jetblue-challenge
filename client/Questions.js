import React, { Component } from "react";
import RadioForm from "./RadioForm";
import Result from "./Result";
import sortPlace from "./sortPlace";

export default class Questions extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 0,
      answers: []
    };
    this.answerQuestion = this.answerQuestion.bind(this);
  }

  answerQuestion(answer) {
    console.log(this.state.answers);
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      answers: [...this.state.answers, answer]
    });
  }

  render() {
    const questions = this.props.questions;
    const answers = this.state.answers;
    const question = questions[this.state.currentQuestion];

    if (answers.length === questions.length) {
      return <Result place={sortPlace(this.state.answers)} />;
    } else {
      return (
        <RadioForm question={question} answerQuestion={this.answerQuestion} />
      );
    }
  }
}
