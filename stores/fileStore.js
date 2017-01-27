'use strict';
import pry from 'pryjs'

const Store = require('./Store');

class FileStore extends Store{
  constructor(props){
    super(props);
    this.state = [ '' ];
  }

  updateFile(index, file){
    var newFiles = Object.assign([], this.getState)
    //newFiles is an array of strings that's the current files state
    //['f1', 'f2', 'f3']

    newFiles.splice(index, 1, file);

    this.setState(newFiles);
  }

  addFile(){
    var newFiles = Object.assign([''], this.getState);
    this.state = [...newFiles, '']
  }

  removeFile(index){
    if (this.state != [ '' ]){
      this.state.splice(index, 1)
    }
  }
}

module.exports = new FileStore([]);
