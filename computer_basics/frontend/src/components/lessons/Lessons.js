import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'

export class Lessons extends Component {
    render() {

        const { isAuthenticated, user } = this.props.auth;

        const userProgress = (
            <Jumbotron fluid style={orangeContainer}>
            <div className="container" style={flexbox}>
                <div className="container">
                    <h1 style={{whiteSpace: "nowrap"}}>Continue this lesson...</h1>
                    <Card style={card}>
                            <img style={image} src="../../../static/lessons/tabs/TabIconTemp.png"></img>
                            <a className="btn btn-info btn-lg"  href="#/Tabs">Browser Tabs</a>
                    </Card>
                </div>
                <div className="container">
                    <h1>Your favorites...</h1>
                    <Card style={card}>
                            <img style={image} src="../../../static/lessons/tabs/TabIconTemp.png"></img>
                            <a className="btn btn-info btn-lg"  href="#/Tabs">Browser Tabs</a>
                    </Card>
                </div>
            </div>
        </Jumbotron>
        );

        const noUser = (
            <Jumbotron fluid style={orangeContainer}>
                <div className="container" style={{textAlign: "center"}}>
                    <h1>Create or log in to an account to track and save your progress!</h1>
                    <br></br>
                    <h5>
                        <a style={{minWidth: "100px"}} className="btn btn-primary btn-lg " href="#/register">Register</a>
                        <a style={{minWidth: "100px"}} className="btn btn-primary btn-lg" href="#/login">Login</a>
                    </h5>

                </div>
            </Jumbotron>
        );

        return (
            <div>
                {isAuthenticated ? userProgress: noUser}
                <Jumbotron fluid style={whiteContainer}>
                    <h1 style={{textAlign: "center"}}>Explore...</h1>
                    <br></br>
                    <div className="container" style={flexRow}>
                        <Card style={card}>
                            <img style={image} src="../../../static/lessons/tabs/TabIconTemp.png"></img>
                            <a className="btn btn-info btn-lg"  href="#/Tabs">Browser Tabs</a>
                        </Card>
                        <Card style={card}>
                            <img style={image} src="../../../static/lessons/tabs/TabIconTemp.png"></img>
                            <a className="btn btn-info btn-lg"  href="#/Printing">Printing</a>
                        </Card>
                        <Card style={card}>
                            <img style={image} src="../../../static/lessons/tabs/TabIconTemp.png"></img>
                            <a className="btn btn-info btn-lg"  href="#/Uploading">Uploading</a>
                        </Card>
                        <Card style={card}>
                            <img style={image} src="../../../static/lessons/tabs/TabIconTemp.png"></img>
                            <a className="btn btn-info btn-lg"  href="#/Account">Creating Accounts</a>
                        </Card>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

const image = {
    maxWidth: "100%",
    height: "auto"
}

const card = {
    width: "250px",
    height: "250px",
    padding: "15px",
    margin: "30px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
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
    minHeight: "75vh",
    marginBottom: '0',
}

const flexbox = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    minHeight: "200px",
}

const flexRow = {
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "space-evenly",
    minHeight: "200px",
    maxWidth: "1600px"
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Lessons);