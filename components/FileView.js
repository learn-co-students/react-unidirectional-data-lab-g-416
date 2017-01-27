'use strict'

const React = require('react');
const Toolbar = require('./Toolbar');
const fileStore = require('../stores/fileStore');
const actions = require('../actions');

class FileView extends React.Component {

  constructor(props){
    super(props);

    let file = fileStore.getState();

    this.state = {
      file: file
    }

    this.handleUpdate = actions.updateFile.bind(this);
    this.handleAdd = actions.addFile.bind(this);
    this.handleRemove = actions.removeFile.bind(this);
   }


  render() {
    const {file} = this.state.file
    return (
      <div className="file-view">
        <Toolbar onAdd={this.handleAdd}>
        </Toolbar>
        <textarea className='file-view__text' file={this.state.file} onChange={this.handleUpdate} onAdd={this.handleAdd()} onRemove={this.handleRemove}></textarea>
      </div>
    );
  }
}

module.exports = FileView;
