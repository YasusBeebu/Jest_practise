class Caesar {
	static keys = {
		a: "n",
		b: "o",
		c: "p",
		d: "q",
		e: "r",
		f: "s",
		g: "t",
		h: "u",
		i: "v",
		j: "w",
		k: "x",
		l: "y",
		m: "z",
		n: "a",
		o: "b",
		p: "c",
		q: "d",
		r: "e",
		s: "f",
		t: "g",
		u: "h",
		v: "i",
		w: "j",
		x: "k",
		y: "l",
		z: "m",
	};

	static encode(str) {
		let encodeStr = "";
		for (let index = 0; index < str.length; index++) {
			encodeStr += Caesar.keys[str[index]];
		}
		return encodeStr;
	}
}

export { Caesar };
