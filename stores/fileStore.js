'use strict';
import pry from 'pryjs'

const Store = require('../stores/Store');

class FileStore extends Store {

  updateFile(index, file){
    const files = this.getState().slice();
    files.splice(index, 1, file);
    this.setState(files);
  }

  addFile(){
    var newFiles = Object.assign(['']);
    this.state = [...newFiles, '']
  }

  removeFile(index){

    if(this.state.length === 1){
      return this.setState(['']);
    }

    const files = this.getState().slice();
    files.splice(index, 1);
    this.setState(files);
  }
}

module.exports = new FileStore(['']);
