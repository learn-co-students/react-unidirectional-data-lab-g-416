'use strict'

const React = require('react');
const classNames = require('classnames');
const getTitle = file => file.split('\n').find(line => line.length > 0);

class SidebarItem extends React.Component {

  generateLinkText() {
    let linkText;
    if(typeof this.props.file === 'string') {
      linkText = getTitle(this.props.file);
    }
    return typeof linkText === 'string' ? linkText : 'Untitled';
  }

  render() {
    return (
      <li className={
                    classNames('sidebar__item', {
                      'sidebar__item--selected': this.props.isSelected})
                    }
      >
        <a className='sidebar__link' onClick={this.props.onClick}>
          <em>{this.generateLinkText()}</em>
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;
