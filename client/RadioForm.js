import React from "react";
import Form from "./Form";
import Popup from "reactjs-popup";

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
      protip: null,
      hoverShow: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleClick(event) {
    this.setState({ protip: event.target.value });
    console.log(this.state.protip);
  }
  handleEnter(event) {
    console.log("HOVER");
    this.setState({ hoverShow: true });
    this.setState({ protip: "I love the beach!!" });
  }
  handleExit(event) {
    console.log("hover out");
    this.setState({ hoverShow: false });
    this.setState({ protip: null });
  }

  render() {
    const name = this.props.question.name;
    const choices = this.props.question.choices;
    const handleSubmit = this.props.handleSubmit;

    return (
      <div className="questions-container">
        {this.state.hoverShow ? <h3>{this.state.protip}</h3> : null}
        <label>{name}</label>
        <div className="choices-container">
          {choices.map(choice => (
            <button
              type="button"
              value={choice.label}
              className="choice-buttons"
              key={choice.value}
              onClick={handleSubmit}
              onMouseEnter={this.handleEnter}
              onMouseOut={this.handleExit}
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
