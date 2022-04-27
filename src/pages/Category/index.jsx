import { Button, Row, Col } from "antd";
import ResultsCards from "./components/ResultsCards";
import Data from "../../components/Data/dados_para_teste.json";
import { useState } from "react";
import { Title } from "../../components/Title";
import { Divider } from 'antd';

const CategoryPage = () => {
  const [value, setValue] = useState(0);

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
            }}
          >
            Animes
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row justify="center">
        <Col span={24}>
          <ResultsCards value={value} category={Data.Categorias[value]} />
        </Col>
      </Row>
    </>
  );
};

export default CategoryPage;
