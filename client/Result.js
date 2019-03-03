import React from 'react';
import axios from 'axios';

class Result extends React.Component {
	constructor() {
		super();
		this.state = {
			imgUrl: '',
			airport: '',
		};
	}

	render() {
		const place = this.props.place;
		return (
			<div id="result">
				{console.log(this.state.imgUrl)}
				<img src={`${this.state.imgUrl}`} />
				<p>You should jet to...{place}!</p>
				<a
					href={`https://book.jetblue.com/B6/webqtrip.html?searchType=NORMAL&fareFamily=LOWESTFARE&origin=JFK&destination=${
						this.state.airport
					}&journeySpan=OW&source=GoogleFlights&referrerCode=GOOGLEFLIGHTS`}
				>
					Book your trip!
				</a>
			</div>
		);
	}

	async componentDidMount() {
		console.log(this.props.place);
		const res = await axios.post('/api/destinations', {
			city: this.props.place,
		});
		console.log(res);
		this.setState({ imgUrl: res.data.imgUrl, airport: res.data.airport });
	}
}

export default Result;
