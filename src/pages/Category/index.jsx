import { Button, Row, Col, Divider } from "antd";
import ResultsCards from "./components/ResultsCards";
import { useState, useEffect } from "react";
import { Title } from "../../components/Title";
import Axios from "axios"

const CategoryPage = () => {
  const [value, setValue] = useState(0);
  const [Data, setData] = useState();

  let response;

  const requestData = async value => {
    const axios = Axios;
    value === 0 ? (
      response = await axios.get("http://localhost:1337/api/platforms?populate=*")
    ) : (
      // response = await axios.get(`http://localhost:1337/api/medias/${value - 1}`)
      console.log("a")
    )
    setData(response.data.data);
    console.log(response.data.data);
  }
  useEffect(() => {
    requestData(value);
  }, []);

  return (
    <>
      <Title>CATEGORIAS</Title>

      <Row justify="space-evenly">
        <Col span={3}>
          <Button
            type="primary"
            shape="round"
            size="large"
            style={value === 0 ? {
              width: "100%",
              height: "3rem",
              minWidth: "120px",
              backgroundColor: "#002a52",
              border: "2px solid #d0d7de",
            } : {
              width: "100%",
              height: "3rem",
              minWidth: "120px",
              backgroundColor: "#004381",
            }}
            onClick={() => {
              setValue(0);
              requestData(value);
            }}
          >
            Plataformas
          </Button>
        </Col>
        <Col span={3}>
          <Button
            type="primary"
            shape="round"
            size="large"
            style={value === 1 ? {
              width: "100%",
              height: "3rem",
              minWidth: "120px",
              backgroundColor: "#002a52",
              border: "2px solid #d0d7de",
            } : {
              width: "100%",
              height: "3rem",
              minWidth: "120px",
              backgroundColor: "#004381",
            }}
            onClick={() => {
              setValue(1);
              requestData(value);
            }}
          >
            Filmes
          </Button>
        </Col>
        <Col span={3}>
          <Button
            type="primary"
            shape="round"
            size="large"
            style={value === 2 ? {
              width: "100%",
              height: "3rem",
              minWidth: "120px",
              backgroundColor: "#002a52",
              border: "2px solid #d0d7de",
            } : {
              width: "100%",
              height: "3rem",
              minWidth: "120px",
              backgroundColor: "#004381",
            }}
            onClick={() => {
              setValue(2);
              requestData(value);
            }}
          >
            Séries
          </Button>
        </Col>
        <Col span={3}>
          <Button 
            type="primary"
            shape="round"
            size="large"
            style={value === 3 ? {
              width: "100%",
              height: "3rem",
              minWidth: "120px",
              backgroundColor: "#002a52",
              border: "2px solid #d0d7de",
            } : {
              width: "100%",
              height: "3rem",
              minWidth: "120px",
              backgroundColor: "#004381",
            }}
            onClick={() => {
              setValue(3);
              requestData(value);
            }}
          >
            Animes
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row justify="center">
        <Col span={24}>
          <ResultsCards value={value} category={Data} />
        </Col>
      </Row>
    </>
  );
};

export default CategoryPage;
