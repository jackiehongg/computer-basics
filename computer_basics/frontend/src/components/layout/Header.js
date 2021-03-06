import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth';


export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    };

    render() {

        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <span className="navbar-text mr-3">
                    <strong>{user ? `Welcome ${user.username}` : ''}</strong>
                </span>
                <li className="nav-item"><a className="nav-link" aria-current="page" href="#/profile">Profile</a></li>
                <li className="nav-item"><button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">Logout</button></li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" aria-current="page" href="#/register">Register</a></li>
                <li className="nav-item"><a className="nav-link" aria-current="page" href="#/login">Login</a></li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: "#403B3A", zIndex: "100"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Computer Basics</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" aria-current="page" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#/about">About</a></li>
                        </ul>
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
