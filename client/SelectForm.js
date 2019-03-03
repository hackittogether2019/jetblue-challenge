import React from "react";
import Form from "./Form";

class SelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      protip: ""
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   // console.log(event.target.nextSibling.nodeValue);
  //   this.setState({ protip: event.target.nextSibling.nodeValue });
  // }
  // const name = props.question.name;
  // const choices = props.question.choices;
  // const handleSubmit = props.handleSubmit;
  // const handleChange = props.handleChange;
  // const answer = props.answer;
  render() {
    const { name, choices } = this.props.question;
    const { handleSubmit, answer, handleChange } = this.props;
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
        <div className="text-center">
          {answer ? <h4>{name}</h4> : null}
          <button type="submit" className="btn btn-light" disabled={!answer}>
            Next
          </button>
        </div>
      </form>
    );
  }
}

export default Form(SelectForm);
