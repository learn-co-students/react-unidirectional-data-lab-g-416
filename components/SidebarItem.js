'use strict'

const React = require('react');
const classNames = require('classnames');

const getTitle = (file) => {
  // Find first non-empty line and use as title.
  return file.split('\n').find(line => line.length);
}

const SidebarItem = ({ file = '', isSelected, onClick }) => (
  <li className={classNames('sidebar__item', {
      'sidebar__item--selected': isSelected    
  })}>
    <a href='#' className="sidebar__link" onClick={onClick}>
      { getTitle(file) || <em>Untitled</em>}
    </a>
  </li>
);

module.exports = SidebarItem;
