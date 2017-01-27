'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {
  handleClick(index, ev) {
  }
  render() {
    const { files, selectedFileIndex, onAdd } = this.props;

    return (
      <ul className="sidebar">
        <li>
          {files.map((file) =>
            <SidebarItem className="sidebar__item"></SidebarItem>
          )}
        </li>
      </ul>
    );
  }
}

module.exports = Sidebar;
