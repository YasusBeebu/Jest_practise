function analyzeArray(arrayOfNumbers) {
	let object = {};

	object.average =
		arrayOfNumbers.reduce((a, b) => a + b, 0) / arrayOfNumbers.length;

	object.min = Math.min(...arrayOfNumbers);
	object.max = Math.max(...arrayOfNumbers);
	object.length = arrayOfNumbers.length;

	return object;
}

export { analyzeArray };
console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
