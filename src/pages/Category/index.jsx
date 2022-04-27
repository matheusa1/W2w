import { Button, Row, Col } from "antd";
import ResultsCards from "./components/ResultsCards";
import Data from "../../components/Data/dados_para_teste.json";
import { useState } from "react";
import { Title } from "../../components/Title";
import * as S from "./styles";

const CategoryPage = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Title>Categorias</Title>

      <Row justify="space-evenly">
        <Col span={3}>
          <Button
            type="primary"
            shape="round"
            size="large"
            style={{
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
            style={{
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
            style={{
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
            style={{
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

      <S.MainText>{Data.Categorias[value].Titulo}</S.MainText>

      <Row justify="center">
        <Col span={24}>
          <ResultsCards value={value} category={Data.Categorias[value]} />
        </Col>
      </Row>
    </>
  );
};

export default CategoryPage;
