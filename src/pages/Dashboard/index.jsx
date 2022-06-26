import { Input, Carousel, Row, Col } from "antd";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Title } from "../../components/Title";
import * as S from "./styles";
import Axios from "axios";

const { Search } = Input;

const contentStyle = {
  width: "100%",
  height: "30rem",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const DashboardPage = () => {
  const [Data, setData] = useState();

  const requestData = async () => {
    const axios = Axios;
    axios.defaults.headers.authorization = null;

    const response = await axios.get(
      "https://w2wbackend.herokuapp.com/api/medias?populate=%2A&pagination[start]=0&pagination[limit]=4"
    );
    setData(response?.data?.data);
    console.log(Data);
  };

  useEffect(() => {
    requestData();
  }, []);

  const onSearch = (value) => {
    console.log(value);
  };

  return (
    <>
      <Title>O que está procurando?</Title>
      <Row justify="center">
        <Col span={10}>
          <Search
            placeholder="Filme, Série, Anime..."
            allowClear
            enterButton="Buscar"
            size="large"
            onSearch={onSearch}
          />
        </Col>
      </Row>
      <S.MainText>DESTAQUES</S.MainText>
      <Row justify="center">
        <Col span={12}>
<<<<<<< HEAD
          <Carousel arrow autoplay dotPosition={"top"}>
            {Data?.map((item, index) => {
              return (
                <NavLink key={item?.id} to={`/filme/${item?.id}`}>
                  <div>
                    <img
                      style={contentStyle}
                      src={item?.attributes?.banner?.data?.attributes?.name}
                      alt="banner"
                    />
                  </div>
                  <p>{index}</p>
                </NavLink>
              );
            })}
=======
          <Carousel autoplay dotPosition={"top"}>
            {/* {filmesDestaques[2].Subcategorias.map((filme) => {
              if (filme.destaque) {
                return (
                  <NavLink to={`/filme/${filme.Id}`} key={filme.Id}>
                    <div>
                      <img
                        style={contentStyle}
                        src={filme.Imagem}
                        alt={filme.Titulo}
                      />
                    </div>
                  </NavLink>
                );
              } else {
                return null;
              }
            })} */}
>>>>>>> 7e688b4dac069d1f839b2135066d3a889d778999
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default DashboardPage;
