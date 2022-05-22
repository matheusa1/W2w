import React, { useState, useEffect} from "react";
import { useParams } from "react-router";
import Axios from "axios";
import { Title } from "../../components/Title";
import { Row, Divider } from 'antd';
import CardResults from './components/CardResults';
import Loading from '../../components/Loading';
import * as S from "./components/styles";

const CategoryPage = () => {
  const [ Data, setData ] = useState();
  const [ Logo , setLogo ] = useState();
  const params = useParams();
  const { id } = params;

  const requestData = async () => {
    const axios = Axios;
    const response = await axios.get(`http://localhost:1337/api/platforms/${id}?populate=media.banner`);
    const responseLogo = await axios.get(`http://localhost:1337/api/platforms/${id}?populate=*`);
    setData(response?.data?.data?.attributes?.media?.data);
    setLogo(responseLogo?.data?.data);
    console.log(response?.data?.data?.attributes?.media?.data);
  }

  useEffect(() => {
    requestData();
  }, []);

  return (
    <>
      <Title>Plataforma</Title>
      <Row justify="center">
        <S.LogoBox src={Logo?.attributes?.logo?.data?.attributes?.name}/>
      </Row>
      <Row justify="center">
        <Divider />
      </Row>
      <Row justify="center">
        {Data === undefined ? <Loading/> : <CardResults data={Data}/> }
      </Row>
    </>
  );
};

export default CategoryPage;
