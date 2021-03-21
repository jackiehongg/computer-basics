import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

export class Login extends Component {

    state = {
        username: '',
        password: '',
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    }

    onSubmit = e => {
        e.preventDefault();
        console.log("Submit")
        this.props.login(this.state.username, this.state.password)
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(e.target.value)
        // console.log("username: " + this.username)
        // console.log("password: " + this.password)
    };

    render() {

        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }

        return (
            <div className="col-md-5 m-auto">
                <div className="card card-body mt-5">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" name="username" autoComplete="username" onChange={this.onChange} value={this.state.username} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" autoComplete="current-password" onChange={this.onChange} value={this.state.password} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
