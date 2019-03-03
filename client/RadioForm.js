import React from 'react';
import Form from './Form';
import { popupUtil } from './popup-util';

class RadioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      protip: null,
      hoverShow: false,
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleEnter(event) {
    this.setState({ hoverShow: true });

    this.setState({ protip: popupUtil(event.target.value) });
  }

  handleExit() {
    this.setState({ hoverShow: false });
    this.setState({ protip: null });
  }

  render() {
    const name = this.props.question.name;
    const img = this.props.question.imgUrl;
    const choices = this.props.question.choices;
    const handleSubmit = this.props.handleSubmit;

    return (
      <div className="questions-container">
        {this.state.hoverShow ? <h4>{this.state.protip}</h4> : null}
        <label>{name}</label>
        <img src={img} />
        <div className="choices-container">
          {choices.map(choice => (
            <button
              type="button"
              value={choice.label}
              className="choice-buttons"
              key={choice.id}
              onClick={handleSubmit(choice.value)}
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
