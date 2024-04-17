import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Header from "./Header";
import Weather from "./Weather";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Twitter from "./Twitter";
import Fotter from "./Fotter";
import "./index.css";
function App() {
  const [data, setData] = useState();
  const [category, setCategory] = useState("Health");
  let samples = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  useEffect(() => {
    const fetchData = async () => {
      let apikey = "e87171b1c0bd49d3bad5e1128e0233e6";
      let response;
      try {
        if (category === "Top Stories") {
          response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=e87171b1c0bd49d3bad5e1128e0233e6`
          );
        } else if (!samples.includes(category)) {
          response = await fetch(
            `https://newsapi.org/v2/everything?q=${category}&apiKey=e87171b1c0bd49d3bad5e1128e0233e6`
          );
        } else {
          response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apikey}`
          );
        }
        const responseData = await response.json();
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <Container fluid>
      <Row>
        <Col xs={0} md={2}>
          <Navbar setCategory={setCategory} />
        </Col>
        <Col xs={12} md={8}>
          <Header setCategory={setCategory} />
        </Col>
        <Col md={2}>
          <Weather />
        </Col>
      </Row>
      <Row>
        <Col xs={0} md={2}>
          {/* <Navbar setCategory={setCategory} /> */}
        </Col>
        <Col xs={12} md={10}>
          <Body val={data} />
        </Col>
      </Row>
      <Row>
        <Col xs={0} md={2}></Col>
        <Col xs={12} md={10}>
          <Twitter />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Fotter />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
