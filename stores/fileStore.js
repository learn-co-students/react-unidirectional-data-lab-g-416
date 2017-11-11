'use strict';

const Store = require('./Store');

class FileStore extends Store {
  constructor(initialFiles) {
    super(initialFiles);
    if (!Array.isArray(this.getState())) {
      this.setState(['']);
    }
  }

  updateFile(index, newFile) {
    this.state = this.state.map((file, cIndex) => cIndex === index ? newFile : file);
  }

  addFile() {
    this.state = [...this.state, ''];
  }

  removeFile(index) {
    if (Number.isInteger(index)) {
      const newState = this.state.slice();
      newState.splice(index, 1);
      this.setState(newState);
    } else {
      if (this.getState().length < 2) {
        this.setState(['']);
      } else {
        this.setState(this.state.slice(0, this.state.length - 1));
      }
    }
  }

}

module.exports = new FileStore();
