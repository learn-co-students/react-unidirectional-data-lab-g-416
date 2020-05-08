"use strict"

const Store = require("./Store")

class FileStore extends Store {

	addFile() {
		const files = [...this.getState()]

		this.setState([...files, ""])
	}

	removeFile(index) {
		const files = [...this.getState()]

		if (files.length === 1) {
			this.setState([""])
		} else {
			files.splice(index, 1);
			this.setState(files);
		}
	}

	updateFile(index, file) {
		const files = [...this.getState()]

		files[index] = file;
		this.setState(files);
	}

}

module.exports = new FileStore([""])
