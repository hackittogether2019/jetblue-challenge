import React from "react";
import Form from "./Form";

const SelectForm = props => {
  const name = props.question.name;
  const choices = props.question.choices;
  const handleSubmit = props.handleSubmit;
  const handleChange = props.handleChange;
  const answer = props.answer;

  return (
    <form onSubmit={handleSubmit}>
      <label>{name}</label>
      <select
        name="answer"
        className="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
        onChange={handleChange}
        value={answer}
      >
        <option value="">--</option>
        {choices.map(choice => (
          <option key={choice.value} value={choice.value}>
            {choice.label}
          </option>
        ))}
      </select>
      <button type="submit" disabled={!answer}>
        Next
      </button>
    </form>
  );
};

export default Form(SelectForm);
