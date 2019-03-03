const sortPlace = answers => {
	const results = answers.reduce((obj, placeNames) => {
		for (const placeName of placeNames) {
			obj[placeName] = obj[placeName] + 1 || 1;
		}
		return obj;
	}, {});

	let max = 0;
	let place = '';
	for (const placeName in results) {
		if (results[placeName] > max) {
			max = results[placeName];
			place = placeName;
		}
	}
	return place;
};

export default sortPlace;
