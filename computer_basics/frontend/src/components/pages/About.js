import React, { Component, Fragment } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export class About extends Component {
    render() {
        return (
            // Make these divs rotated like leetcode's
            <div>
                <Jumbotron fluid style={whiteContainer}>
                    <div className="container">
                        <h1 ><strong>Our Mission</strong></h1>
                        <h4>
                            Computer Basics aims to help beginners of all ages <br />
                            practice essential computer skills and build the confidence <br />
                            they needfor using computers.
                        </h4>
                    </div>
                </Jumbotron>
                <Jumbotron fluid style={orangeContainer}>
                    <div className="container" style={text1}>
                        <h1><strong>All in One Place</strong></h1>
                        <h4>
                            Essential computer skills can be found in one convenient location online.
                        </h4>
                    </div>
                </Jumbotron>
                <Jumbotron fluid style={whiteContainer}>
                    <div className="container" style={{paddingTop: "50px"}}>
                        <h1><strong>Track Your Progress</strong></h1>
                        <h4>
                            Create a free account to keep track of your learning <br />
                            and pin your favorite skills for easy access.
                        </h4>
                        <a className="btn btn-info btn-lg" aria-current="page" href="#/register">Create an Account</a>
                    </div>

                </Jumbotron>
                <Jumbotron fluid style={blackContainer}>
                    <div className="container" style={text2}>
                        <h1><strong>Start Practicing</strong></h1>
                        <h4>
                            Practice your newly learned skills.
                        </h4>
                        <a className="btn btn-info btn-lg" aria-current="page" href="#">View Lessons</a>
                    </div>
                </Jumbotron>
                <Jumbotron fluid style={whiteContainer}>
                    <div className="container" style={{paddingTop: "50px"}}>
                        <h1 ><strong>Developer</strong></h1>
                        <h4>Enjoyed this website? Feel free to contact me here.</h4>
                        <h4>Jackie Hong</h4>
                        <h4>jackie.hong@rutgers.edu</h4>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

const bgrey1 = {
    backgroundColor: "#403B3A",
    background: 'linear-gradient(180deg, #403B3A, #E39A78)'
}

const whiteContainer = {
    padding: "100px",
    backgroundColor: "#FFFFFF",
    color: "#000",
    minHeight: "300px",
    marginBottom: '0',
}

const orangeContainer = {
    padding: '100px',
    backgroundColor: "#E39A78",
    marginBottom: '0',
    transform: "skewy(-2deg)",
    position: "relative",
    minHeight: "300px",
    textAlign: "right",
}

const blackContainer = {
    padding: '100px',
    backgroundColor: "#403B3A",
    marginBottom: '0',
    transform: "skewy(2deg)",
    position: "relative",
    minHeight: "300px",
    textAlign: "right",

}

const text1 = {
    transform: "skewy(2deg)"
}

const text2 = {
    color: "#FFFFFF",
    transform: "skewy(-2deg)"
}

export default About