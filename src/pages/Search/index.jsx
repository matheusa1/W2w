import { Button, Row, Col, Divider, Input, Pagination } from "antd";
import CardResultsPlatforms from "./components/CardResultsPlatforms";
import CardResults from "../../components/CardResults";
import { useState, useEffect } from "react";
import { Title } from "../../components/Title";
import Loading from "../../components/Loading";
import Axios from "axios";

let value = 0;
let pagination = 1;
const SearchPage = () => {
  const [Data, setData] = useState();
  const [inputText, setInputText] = useState("");

  let categoryId;

  const onChange = (page) => {
    pagination = page;
    requestData();
  };

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
    let response;
    if (inputText === "" || inputText === undefined) {
      response = await axios.get(
        `http://localhost:1337/api/${
          value === 0
            ? `platforms?populate=%2A&pagination[start]=${
                (pagination - 1) * 15
              }&pagination[limit]=15`
            : `categories/${categoryId}?populate=media.banner&pagination[start]=${
                (pagination - 1) * 15
              }&pagination[limit]=15`
        }`
      );
    } else {
      response = await axios.get(
        `http://localhost:1337/api/${
          value === 0
            ? `platforms?populate=%2A&filters[name][$containsi]=${inputText}`
            : `categories/${categoryId}?populate=media.banner&filters[name][$containsi]=${inputText}`
        }`
      );
    }
    setData(response?.data?.data);
  };

  useEffect(() => {
    requestData();
  }, [inputText]);

  const ActionButton = (num) => {
    value = num;
    pagination = 0;
    requestData();
  };

  return (
    <>
      <Row>
        <Title>PESQUISAR</Title>
      </Row>
      <Row justify="space-around">
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

      <Row justify="center">
        <Col span={12}>
          <Input
            allowClear
            size="large"
            style={{ marginTop: "20px" }}
            placeholder="Filme, série, anime, plataforma"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
        </Col>
      </Row>

      <Divider />

      <Row justify="center">
        {Data === undefined ? (
          <Loading />
        ) : value === 0 ? (
          <CardResultsPlatforms data={Data}/>
        ) : (
          <CardResults data={Data?.attributes?.media?.data} />
        )}
      </Row>

      <Row justify="center">
        <Pagination
          current={pagination}
          onChange={onChange}
          total={50}
          size="small"
        />
      </Row>
    </>
  );
};

export default SearchPage;
