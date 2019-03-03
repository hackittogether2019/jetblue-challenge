import React from 'react';
import Form from './Form';

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
      protip: '',
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
    const img = this.props.question.imgUrl;
    const choices = this.props.question.choices;
    const handleSubmit = this.props.handleSubmit;

    return (
      <div className="questions-container">
        <label>{name}</label>
        <img src={img} />

        <div className="choices-container">
          {choices.map(choice => (
            <button
              type="button"
              value={choice.label}
              className="choice-buttons"
              key={choice.id}
              onClick={handleSubmit}
            >
              {choice.label}
            </button>
          ))}
        </div>

        <div className="text-center">
          {this.state.protip ? <h4>{this.state.protip}</h4> : null}
        </div>
      </div>
    );
  }
}

export default Form(RadioForm);
