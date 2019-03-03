import React from 'react';

const Form = OtherComponent => {
	return class Form extends React.Component {
		constructor() {
			super();
			this.handleSubmit = this.handleSubmit.bind(this);
		}

		handleSubmit(answer) {
			return function(evt) {
				evt.preventDefault();
				this.props.answerQuestion(answer);
			}.bind(this);
		}

		render() {
			return (
				<OtherComponent {...this.props} handleSubmit={this.handleSubmit} />
			);
		}
	};
};

export default Form;
