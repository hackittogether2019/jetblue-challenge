import React from "react";
import Form from "./Form";
import Popup from "reactjs-popup";

class RadioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      protip: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ protip: event.target.value });
  }

  render() {
    const name = this.props.question.name;
    const choices = this.props.question.choices;
    const handleSubmit = this.props.handleSubmit;

    return (
      <div>
        <label>{name}</label>
        <div>
          {choices.map(choice => (
            <button
              type="button"
              value={choice.label}
              className="choice-buttons"
              key={choice.value}
              onClick={handleSubmit}
            >
              {choice.label}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Form(RadioForm);
