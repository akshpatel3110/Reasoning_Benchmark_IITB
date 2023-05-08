import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';


class navbarcomp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="/" style={{ fontSize: 30 }}>&nbsp; 📊Reasoning Benchmark</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="https://www.cfilt.iitb.ac.in/publications.html" style={{ fontSize: 20 }}><b>📝Papers</b></Nav.Link>
            <Nav.Link href="https://www.cfilt.iitb.ac.in/surveys.html" style={{ fontSize: 20 }}><b>👨‍💻Surveys</b></Nav.Link>
            <Nav.Link href="/Tasks" style={{ fontSize: 20 }}><b>🧠Tasks</b></Nav.Link>
            
            <NavDropdown title=<b>More</b> id="basic-nav-dropdown" style={{ fontSize: 20 }}>
              <NavDropdown.Item href="/Leaderboard" style={{ fontSize: 20 }}>
              🏆Leaderboard
              </NavDropdown.Item>
              <NavDropdown.Item href="/FAQ" style={{ fontSize: 20 }}>🙋FAQ</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/cfilt" style={{ fontSize: 20 }}>🔗Github</NavDropdown.Item>
              <NavDropdown.Item href="https://www.cfilt.iitb.ac.in/people.html" style={{ fontSize: 20 }}>🗣️Team</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="/Submit" style={{ fontSize: 20 }}><b>✔️Submit</b></Nav.Link>&nbsp;&nbsp;
          </Nav>
        </Navbar.Collapse>
    </Navbar>
            </div>
        );
    }
}

export default navbarcomp;