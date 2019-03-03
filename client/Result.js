import React from 'react';

const Result = props => {
	const place = props.place;
	return (
		<div id="result">
			<img src={`/${place}.png`} />
			<p>You ought to be in...{place}!</p>
		</div>
	);
};

export default Result;
