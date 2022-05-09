import { analyzeArray } from "../Js/analyzeArray";

it("should return Object", () => {
	expect(typeof analyzeArray([1, 8, 3, 4, 2, 6])).toBe("object");
});

it("should return average: 4", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("average", 4);
});

it("should return min: 1", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("min", 1);
});

it("should return max: 8", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("max", 8);
});

it("should return length: 6", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("length", 6);
});
