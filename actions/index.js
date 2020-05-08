"use strict"

const fileStore = require("../stores/fileStore")

const addFile = () => fileStore.addFile();
const removeFile = index => fileStore.removeFile(index);
const updateFile = (index, file) => fileStore.updateFile(index, file);

module.exports = {
	addFile,
	removeFile,
	updateFile,
}
