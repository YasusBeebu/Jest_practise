function capitalize(string) {
	return (
		`${string.charAt(0).toUpperCase()}` + `${string.toLowerCase().slice(1)}`
	);
}

export { capitalize };
