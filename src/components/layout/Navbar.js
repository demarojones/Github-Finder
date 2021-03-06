import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {

    //If no props are provided these will be used
    static defaultProps = {
        title: "GITHUB FINDER",
        icon: "fab fa-github"
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className="navbar bg-primary">
                <h1 className="">
                    <i className={this.props.icon}></i> {this.props.title}

                </h1>
            </nav>
        )
    }
}

export default Navbar;
