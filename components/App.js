'use strict';

const React = require('react');
const Sidebar = require('./Sidebar');
const FileView = require('./FileView');
const Toolbar = require('./Toolbar');

const fileStore = require('../stores/fileStore');
const actions = require('../actions');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: fileStore.getState(),
      selectedFileIndex: 0
    };
  }
  componentDidMount() {
    this.removeListener = fileStore.addListener(files => this.setState({files: files}));
  }
  componentWillUnmount() {
    this.removeListener();
  }
  handleChange(ev) {
    const { selectedFileIndex } = this.state;
    actions.updateFile(this.state.selectedFileIndex, ev.target.value);
  }
  handleSelect(selectedFileIndex) {
    this.setState(selectedFileIndex);
  }
  handleAdd(ev) {
    ev.preventDefault();
    actions.addFile();
  }
  handleRemove(ev) {
    ev.preventDefault()
    actions.removeFile(this.state.selectedFileIndex)
  }
  render() {
    const { files, selectedFileIndex } = this.state;
    const file = files[selectedFileIndex];

    return (
      <div className="app">
        <Sidebar
          files={files}
          selectedFileIndex={selectedFileIndex}
          onSelect={this.handleSelect}
        />
        <FileView
          file={file}
          onChange={this.handleChange}
          onAdd={this.handleAdd}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

module.exports = App;
