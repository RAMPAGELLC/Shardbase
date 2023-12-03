function err(obj) {
	return console.error(obj.toJSON().stack);
}

export { err };