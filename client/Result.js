import React from 'react';
import axios from 'axios'

class Result extends React.Component {
	constructor() {
		super()
			this.state = {
				imgUrl: "",
				airport: ""
			}
	}
	
	render() {
		const place = this.props.place;
		return (
			<div id="result">
			{console.log(this.state.imgUrl)}
				<img src={`${this.state.imgUrl}`} />
				<p>You should jet to...{place}!</p>
			</div>
		);
	}

	async componentDidMount() {
		console.log(this.props.place)
		const res = await axios.post('/api/destinations', {city: this.props.place})
		console.log(res)
    this.setState({ imgUrl: res.data.imgUrl, airport: res.data.airport })
	}
}

export default Result;
