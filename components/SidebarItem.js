'use strict'

const React = require('react');
const classNames = require('classnames');

class SidebarItem extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isSelected: false
    }
  }
  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }
  render() {
    return (
      <li className="sidebar__item">
        <a className="sidebar__link">
          {this.getTitle}
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;
