import { Button, Row, Col, Divider } from "antd";
import ResultsCards from "./components/ResultsCards";
import { useState, useEffect } from "react";
import { Title } from "../../components/Title";
import Axios from "axios";

let value = 0;
const CategoryPage = () => {
  const [Data, setData] = useState();

  let categoryId;

  const setCategoryId = () => {
    if (value === 1) {
      categoryId = 7;
    }
    if (value === 2) {
      categoryId = 6;
    }
    if (value === 3) {
      categoryId = 5;
    }
  };

  const requestData = async () => {
    const axios = Axios;
    setCategoryId();
    const response = await axios.get(
      `http://localhost:1337/api/${
        value === 0 ? "platforms" : `categories/${categoryId}`
      }?populate=*`
    );
    setData(response.data.data);
  };

  useEffect(() => {
    requestData();
  }, []);

  const ActionButton = (num) => {
    value = num;
    requestData();
  };

  return (
    <>
      <Title>CATEGORIAS</Title>

      <Row justify="space-evenly">
        <Col span={3}>
          <Button
            type="primary"
            shape="round"
            size="large"
            style={
              value === 0
                ? {
                    width: "100%",
                    height: "3rem",
                    minWidth: "120px",
                    backgroundColor: "#002a52",
                    border: "2px solid #d0d7de",
                  }
                : {
                    width: "100%",
                    height: "3rem",
                    minWidth: "120px",
                    backgroundColor: "#004381",
                  }
            }
            onClick={() => ActionButton(0)}
          >
            Plataformas
          </Button>
        </Col>
        <Col span={3}>
          <Button
            type="primary"
            shape="round"
            size="large"
            style={
              value === 1
                ? {
                    width: "100%",
                    height: "3rem",
                    minWidth: "120px",
                    backgroundColor: "#002a52",
                    border: "2px solid #d0d7de",
                  }
                : {
                    width: "100%",
                    height: "3rem",
                    minWidth: "120px",
                    backgroundColor: "#004381",
                  }
            }
            onClick={() => ActionButton(1)}
          >
            Filmes
          </Button>
        </Col>
        <Col span={3}>
          <Button
            type="primary"
            shape="round"
            size="large"
            style={
              value === 2
                ? {
                    width: "100%",
                    height: "3rem",
                    minWidth: "120px",
                    backgroundColor: "#002a52",
                    border: "2px solid #d0d7de",
                  }
                : {
                    width: "100%",
                    height: "3rem",
                    minWidth: "120px",
                    backgroundColor: "#004381",
                  }
            }
            onClick={() => ActionButton(2)}
          >
            Séries
          </Button>
        </Col>
        <Col span={3}>
          <Button
            type="primary"
            shape="round"
            size="large"
            style={
              value === 3
                ? {
                    width: "100%",
                    height: "3rem",
                    minWidth: "120px",
                    backgroundColor: "#002a52",
                    border: "2px solid #d0d7de",
                  }
                : {
                    width: "100%",
                    height: "3rem",
                    minWidth: "120px",
                    backgroundColor: "#004381",
                  }
            }
            onClick={() => ActionButton(3)}
          >
            Animes
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row justify="center">
        <Col span={24}>
          {Data === undefined ? (
            console.log("err")
          ) : (
            <ResultsCards value={value} category={Data} />
          )}
        </Col>
      </Row>
    </>
  );
};

export default CategoryPage;
