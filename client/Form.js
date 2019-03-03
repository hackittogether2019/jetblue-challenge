import React from 'react';

const Form = OtherComponent => {
	return class Form extends React.Component {
		constructor() {
			super();
			this.handleSubmit = this.handleSubmit.bind(this);
		}

		handleSubmit(evt) {
			evt.preventDefault();
			this.props.answerQuestion(evt.target.value);
		}

		render() {
			return (
				<OtherComponent {...this.props} handleSubmit={this.handleSubmit} />
			);
		}
	};
};

export default Form;
