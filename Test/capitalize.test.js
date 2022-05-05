import { capitalize } from "../Js/capitalize";

it("should return string", () => {
	expect(typeof capitalize("james")).toBe("string");
});

it("should return James from james", () => {
	expect(capitalize("james")).toBe("James");
});

it("should return James from jAMEs", () => {
	expect(capitalize("jAMEs")).toBe("James");
});
