class Calculator {
	constructor() {}

	static math(a, b, operator) {
		switch (operator) {
			case "+":
				return a + b;
			case "-":
				return a - b;
			case "*":
				return a * b;
			case "/":
				return a / b;
		}
	}
}

export { Calculator };
