import React, {Component} from 'react';

class Navbar extends Component {

    render() {

        return (
            <nav className="navbar">
                <span>
                    <i className="navbar-logo fa-solid fa-leaf"></i>
                </span>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;
