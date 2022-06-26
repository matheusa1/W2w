import { Button, Row, Col, Divider, Input, Pagination } from "antd";
import CardResultsPlatforms from "./components/CardResultsPlatforms";
import CardResults from "../../components/CardResults";
import { useState, useEffect } from "react";
import { Title } from "../../components/Title";
import Loading from "../../components/Loading";
import { DebounceInput } from "react-debounce-input";
import Axios from "axios";

let value = 0;
let pagination = 1;
let itensPorPaginas = 15;
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
      categoryId = 3;
    }
    if (value === 2) {
      categoryId = 2;
    }
    if (value === 3) {
      categoryId = 1;
    }
  };

  const requestData = async () => {
    const axios = Axios;
    setCategoryId();
    axios.defaults.headers.authorization = null;

    let response;
    if (inputText === "" || inputText === undefined) {
      response = await axios.get(
        `https://w2wbackend.herokuapp.com/api/${
          value === 0
            ? `platforms?populate=%2A&pagination[page]=${pagination}&pagination[pageSize]=${itensPorPaginas}&pagination[withCount]=true`
            : `medias?populate=%2A&filters[category][id][$eq]=${categoryId}&pagination[page]=${pagination}&pagination[pageSize]=${itensPorPaginas}&pagination[withCount]=true`
        }`
      );
    } else {
      response = await axios.get(
        `https://w2wbackend.herokuapp.com/api/${
          value === 0
            ? `platforms?populate=%2A&filters[name][$containsi]=${inputText}&pagination[page]=${pagination}&pagination[pageSize]=${itensPorPaginas}&pagination[withCount]=true`
            : `medias?populate=%2A&filters[title][$containsi]=${inputText}&filters[category][id][$eq]=${categoryId}&pagination[page]=${pagination}&pagination[pageSize]=${itensPorPaginas}&pagination[withCount]=true`
        }`
      );
    }
    setData(response?.data);
    console.log(response?.data);
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
          <DebounceInput
            debounceTimeout={500}
            placeholder="Filme, série, anime, plataforma"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyUp={() => requestData()}
            // element={InputAllowClear}
            element={Input}
            style={{ marginTop: "20px" }}
          />
        </Col>
      </Row>

      <Divider />

      <Row justify="center">
        {Data === undefined ? (
          <Loading />
        ) : value === 0 ? (
          <CardResultsPlatforms data={Data?.data} />
        ) : (
          <CardResults data={Data?.data} />
        )}
      </Row>

      <Divider />

      <Row justify="center">
        {Data?.meta?.pagination?.total > itensPorPaginas ? (
          <Pagination
            current={pagination}
            onChange={onChange}
            total={(Data?.meta?.pagination?.total / itensPorPaginas) * 10}
            size="small"
          />
        ) : null}
      </Row>
    </>
  );
};

export default SearchPage;
