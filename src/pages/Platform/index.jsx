import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import { Title } from "../../components/Title";
import { Row, Divider, Pagination } from "antd";
import CardResults from "../../components/CardResults";
import Loading from "../../components/Loading";
import * as S from "./styles";

let pagination = 1;
const itensPorPaginas = 15;

const CategoryPage = () => {
  const [Data, setData] = useState();
  const [Logo, setLogo] = useState();
  const params = useParams();
  const { id } = params;

  const requestData = async () => {
    const axios = Axios;
    axios.defaults.headers.authorization = null;
    // const responseLogo = await axios.get(
    //   `https://w2wbackend.herokuapp.com/api/platforms/${id}?populate=*`
    // );
    // const response = await axios.get(
    //   `https://w2wbackend.herokuapp.com/api/medias?populate=%2A&filters[platforms][name][$eq]=${responseLogo?.data?.data.attributes.name}&pagination[page]=${pagination}&pagination[pageSize]=${itensPorPaginas}&pagination[withCount]=true`
    // );
    const responseLogo = await axios.get(
      `http://localhost:1337/api/platforms/${id}?populate=*`
    );
    const response = await axios.get(
      `http://localhost:1337/api/medias?populate=%2A&filters[platforms][name][$eq]=${responseLogo?.data?.data.attributes.name}&pagination[page]=${pagination}&pagination[pageSize]=${itensPorPaginas}&pagination[withCount]=true`
    );
    setLogo(responseLogo?.data?.data);
    setData(response?.data);
    console.log(response?.data);
    console.log(responseLogo?.data?.data);
  };

  const onChange = (page) => {
    pagination = page;
    requestData();
  };

  useEffect(() => {
    pagination = 1;
    requestData();
  }, []);

  return (
    <>
      <Title>Plataforma</Title>
      <Row justify="center">
        <S.LogoBox src={Logo?.attributes?.logo?.data?.attributes?.name} />
      </Row>
      <Row justify="center">
        <Divider />
      </Row>
      <Row justify="center">
        {Data === undefined ? <Loading /> : <CardResults data={Data.data} />}
      </Row>
      <Row justify="center">
        <Divider />
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

export default CategoryPage;
