const sortPlace = answers => {
	console.log(answers);
	const results = answers.reduce((obj, placeNames) => {
		for (const placeName of placeNames) {
			obj[placeName] = obj[placeName] + 1 || 1;
		}
		return obj;
	}, {});
	console.log(results);

	let max = 0;
	let place = '';
	for (const placeName in results) {
		if (results[placeName] > max) {
			max = results[placeName];
			place = placeName;
		}
	}
	console.log(place);
	return place;
};

export default sortPlace;
