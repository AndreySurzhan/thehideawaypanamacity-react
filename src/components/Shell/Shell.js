import React from 'react';
import './Shell.css';
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Shell(props) {
  return (
    <div className="wrapper">
      <Nav>
      </Nav>
      <Header>
      </Header>
      <div className="main-content">
        {props.children}
      </div>
      <Footer>
      </Footer>
    </div>
  );
}

export default Shell;
