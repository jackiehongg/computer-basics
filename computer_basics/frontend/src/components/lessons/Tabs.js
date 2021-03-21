import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

export default class Tabs extends Component {
    render() {
        return (
            <div style={body}>
                <Jumbotron fluid style={orangeContainer}>
                    <div className="container">
                        <h1>Tabs</h1>
                    </div>
                </Jumbotron>
                <Jumbotron fluid style={whiteContainer}>
                    <div className="container">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Part 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Part 2</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Part 3</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">Part 4</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fifth">Part 5</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <h3>Part 1</h3>
                                            <img style={image} src="../../../static/lessons/tabs/1.png"></img>
                                            <p>
                                                Take a look at your web browser, it should look similar to this.
                                        </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <h3>Part 2</h3>
                                            <img style={image} src="../../../static/lessons/tabs/2.png"></img>
                                            <p> Notice how there is part that says "Computer Basics" at the top. That is called a tab. Take a look to the right of the tab and you will see a small plus sign. </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <h3>Part 3</h3>
                                            <img style={image} src="../../../static/lessons/tabs/3.png"></img>
                                            <p>If you click on the plus sign, a new tab is created! Creating a new tab is useful because you can quickly and easily navigate between many websites</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            <h3>Part 4</h3>
                                            <img style={image} src="../../../static/lessons/tabs/4.png"></img>
                                            <p>You can also use the right click button on a link and choose the option that says "Open link in new tab". This can be useful if you are shopping online and want to compare different products</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth">
                                            <h3>Part 5</h3>
                                            <img style={image} src="../../../static/lessons/tabs/5.png"></img>
                                            <p>You can navigate between your tabs clicking on the website's name at the top of your web browser. To get rid of a tab, simply click on the X.</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>

                    {/* <div className="container">
                        <h1>Body</h1>
                        <p>Paginate parts?</p>
                        <p>Make a floating dropdown that jumps to each part on the left?</p>
                        <div className="container">
                            <h3>Part 1</h3>
                            <img src="../../../static/lessons/tabs/whole.png"></img>
                            <p>
                                Take a look at your web browser, it should look similar to this.
                            </p>
                        </div>
                        <div className="container">
                            <h3>Part 2</h3>
                            <img src="../../../static/lessons/tabs/1tab_close.png"></img>
                            <p> Notice how there is part that says "Computer Basics" at the top. That is called a tab. Take a look to the right of the tab and you will see a plus sign. </p>
                        </div>
                        <div className="container">
                            <h3>Part 3</h3>
                            <img src="../../../static/lessons/tabs/2tab_close.png"></img>
                            <p>If you click on the plus sign, a new tab is created! Creating a new tab is useful because you can quickly and easily navigate between many websites</p>
                        </div>
                        <div className="container">
                            <h3>Part 4</h3>
                            <img src="../../../static/lessons/tabs/right_click_new.png"></img>
                            <p>You can also use the right click button on a link and choose the option that says "Open link in new tab". This can be useful if you are shopping online and want to compare different products</p>
                        </div>
                        <div className="container">
                            <h3>Part 5</h3>
                            <img src="../../../static/lessons/tabs/3tab.png"></img>
                            <p>You can navigate between your tabs clicking on the website's name at the top of your web browser</p>
                        </div>

                    </div> */}
                </Jumbotron>
                <Jumbotron fluid style={blackContainer}>
                    <div className="container">
                        <button type="submit" className="btn btn-primary btn-large">Got it!</button>
                        <p>(placeholder for now) Keep track of your progress by choosing this button</p>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

const body = {
    display: "flex",
    flexDirection: "column",
    margin: "0px",
    minHeight: "100vh"
}

const image = {
    maxWidth: "100%",
    height: "auto"
}

const orangeContainer = {
    backgroundColor: "#E39A78",
    color: "#000000",
    marginBottom: '0',
}

const whiteContainer = {
    padding: "25px",
    backgroundColor: "#FFFFFF",
    color: "#000",
    height: "800px",
    marginBottom: '0',
}

const blackContainer = {
    paddingTop: '25px',
    backgroundColor: "#403B3A",
    color: "#FFFFFF",
    marginBottom: '0',
    flex: "1"
}
