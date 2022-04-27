import { Input, Carousel, Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import { Title } from "../../components/Title";
import * as S from "./styles";
import Data from "../../components/Data/dados_para_teste.json";

const { Search } = Input;

const contentStyle = {
  width: "100%",
  height: "30rem",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const filmesDestaques = Data.Categorias;

const DashboardPage = () => {
  const onSearch = (value) => {
    console.log(value);
  };

  return (
    <>
      <Title>O que está procurando?</Title>
      <Row justify="center">
        <Col span={10}>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"  
            onSearch={onSearch}
          />
        </Col>
      </Row>
      <S.MainText>DESTAQUES</S.MainText>
      <Row justify="center">
        <Col span={12}>
          <Carousel autoplay dotPosition={"top"}>
            {filmesDestaques[2].Subcategorias.map((filme) => {
              if(filme.destaque) {
                return (
                  <NavLink to={`/filme/${filme.Id}`}> 
                    <div key={filme.Id}>
                      <img style={contentStyle} src={filme.Imagem} alt={filme.Titulo} />
                    </div>
                  </NavLink> 
                );
              } else {
                return null;
              }
            })}
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default DashboardPage;
