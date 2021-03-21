import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';

class Profile extends Component {
    render() {

        const { isAuthenticated, user } = this.props.auth;

        // TODO Redirect does not work
        // if (!this.props.isAuthenticated) {
        //     return <Redirect to="/login" />;
        // }

        return (
            <div>
                <div style={top}>
                    <div className="container" style={pfp}>
                        <img style={image} src="../../../static/default/pfp.jpg"></img>
                    </div>
                </div>
                <Jumbotron fluid style={whiteContainer}>
                    <div className="container" style={mid}>
                        <h3><strong>{user ? `Welcome ${user.username}` : 'No User'}</strong></h3>
                        <h3><strong>{user ? `${user.email}` : 'No User'}</strong></h3>
                    </div>
                </Jumbotron>
                <Jumbotron fluid style={whiteContainer}>
                    <div className="container" style={mid}>
                        <h1>Your Badges...</h1>
                        <h5>Feature coming soon.</h5>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

const top = {
    display: "flex",
    justifyContent: "center",
    AlignItems: "center",
    flexDirection: "row",
    minHeight: "200px",
    background: 'linear-gradient(180deg, #E39A78 50%, #FFFFFF 50%)'
}

const mid = {
    textAlign: "center",
}

const image = {
    display: "block",
    margin: "auto",
    maxWidth: "150px",
    borderRadius: "50%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

}

const pfp = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const orangeContainer = {
    paddingBottom: '100px',
    backgroundColor: "#E39A78",
    marginBottom: '0',
    minHeight: "300px",
}

const whiteContainer = {
    padding: "50px",
    backgroundColor: "#FFFFFF",
    color: "#000",
    minHeight: "300px",
    marginBottom: '0',
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Profile);