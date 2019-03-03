import React from "react";
import Form from "./Form";

// var styles = {
//   fontSize: "16px",
//   buttons: {
//     height: "100px"
//   }
// };

class RadioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      protip: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // console.log(event.target.nextSibling.nodeValue);
    // console.log(event.target.value);
    this.setState({ protip: event.target.value });
  }
  render() {
    const name = this.props.question.name;
    const choices = this.props.question.choices;
    const handleSubmit = this.props.handleSubmit;
    // const handleChange = this.props.handleChange;
    const answer = this.props.answer;

    return (
      // <form onSubmit={handleSubmit} className="text-center" style={styles}>
      <div>
        <form onSubmit={handleSubmit} className="choices-container">
          <label>{name}</label>
          <div>
            {choices.map(choice => (
              <button
                type="button"
                value={choice.label}
                className="choice-buttons"
                key={choice.value}
                onClick={this.handleClick}
              >
                {choice.label}
              </button>
            ))}
          </div>

          <div className="text-center">
            {this.state.protip ? <h4>{this.state.protip}</h4> : null}
          </div>
          <button type="submit" disabled={!answer}>
            Next
          </button>
        </form>
      </div>
    );
  }
}

export default Form(RadioForm);
