import { Caesar } from "../Js/caesar";

it("should return string", () => {
	expect(typeof Caesar.encode("Abc")).toBe("string");
});

it("should return nopqrstuvwxyzabcdefghijklm", () => {
	expect(Caesar.encode("abcdefghijklmnopqrstuvwxyz")).toBe(
		"nopqrstuvwxyzabcdefghijklm"
	);
});
