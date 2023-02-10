import React from "react";
import "../css/head.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              <h1>Welcome to college Duniya</h1>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="primary" expand="lg" variant="light">
        <Container>
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              <h2>Top Universities/Colleges For BE/B.Tech</h2>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
