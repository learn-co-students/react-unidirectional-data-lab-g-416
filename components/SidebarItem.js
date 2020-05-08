"use strict"

const React = require("react");
const classNames = require("classnames");

class SidebarItem extends React.Component {

	getTitle (file) {
		return file.split("\n").find(line => line.length)
	}

	render() {
		const {file="", isSelected, onClick} = this.props

		return (
			<li className={classNames("sidebar__item", {"sidebar__item--selected": isSelected})}>
				<a href="#" className="sidebar__link" onClick={onClick}>
					{this.getTitle(file) || <em>Untitled</em>}
				</a>
			</li>
		)
	}

}

module.exports = SidebarItem
