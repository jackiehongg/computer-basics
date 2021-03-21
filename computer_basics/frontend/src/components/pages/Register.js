import React, { Component } from 'react'
import { register } from '../../actions/auth';

export class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.password === this.state.password2) {
            register(this.state.username, this.state.email, this.state.password)
        } else {
            console.log("Passwords do not match")
        }
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(e.target.value)
    };

    render() {
        return (
            <div className="col-md-5 m-auto">
                <div className="card card-body mt-5">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" name="username" onChange={this.onChange} value={this.state.username} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" onChange={this.onChange} value={this.state.email} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" onChange={this.onChange} value={this.state.password} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" name="password2" onChange={this.onChange} value={this.state.password2} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register
