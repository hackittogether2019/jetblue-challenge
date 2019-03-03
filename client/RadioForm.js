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
	}

	render() {
		const name = this.props.question.name;
		const choices = this.props.question.choices;
		const handleSubmit = this.props.handleSubmit;

		return (
			<div className="questions-container">
				<label>{name}</label>
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
