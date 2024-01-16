import React from "react";
import "./App.css";
import { Card } from "react-bootstrap";
import Name from "./Components/Name";
import Price from "./Components/Price";
import Description from "./Components/Description";
import Image from "./Components/Image";
import product from "./product";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import InputNameBox from "./InputNameBox";
import { useState } from "react";


const App = () => {
  const [userName, setUserName] = useState("");

  function handleUserName(e) {
    setUserName(e.target.value)
  }

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <InputNameBox handleUserName={handleUserName}/>
      <h1>Hello {userName ? userName : "There"}</h1>
      <div class="swatchParent">
        {userName ? <div className="swatch">
          {product.watches.map((watch) => {
            return (
              <Card>
                <Image productImage={watch.imageUrl} />
                <Card.Body>
                  <Name productName={watch.name} />
                  <Price productPrice={watch.price} />
                  <Description productDescription={watch.description} />
                </Card.Body>
              </Card>
            );
          })}
        </div> : <div></div>}
      </div>
    </div>
  );
};

export default App;
