'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, ev) {
    ev.preventDefault();
    this.props.onSelect(index);
  }

  generateSidebarItems() {
    const { files, selectedFileIndex } = this.props;
    return files.map(
      (file, index) =>
        <SidebarItem
          key={index}
          isSelected={index === selectedFileIndex}
          file={file}
          onClick={this.handleClick.bind(null, index)}
        />
    );
  }

  render() {
    const { files, selectedFileIndex, onAdd } = this.props;

    return (
      <ul className="sidebar">
        {this.generateSidebarItems()}
      </ul>
    );
  }
}

module.exports = Sidebar;
