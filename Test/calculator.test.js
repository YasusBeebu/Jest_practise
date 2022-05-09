import { Calculator } from "../Js/Calculator";

describe("Calculator math", () => {
	it("should return number", () => {
		expect(typeof Calculator.math(2, 2, "+")).toBe("number");
	});
	it("should return 4", () => {
		expect(Calculator.math(2, 2, "+")).toBe(4);
	});
	it("should return 5", () => {
		expect(Calculator.math(7, 2, "-")).toBe(5);
	});
	it("should return 10", () => {
		expect(Calculator.math(5, 2, "*")).toBe(10);
	});
	it("should return 3", () => {
		expect(Calculator.math(9, 3, "/")).toBe(3);
	});
});
