import { Card, Col, Row } from "antd";
import { NavLink } from "react-router-dom";

const ResultsCards = ({ value, category }) => {
  const categoryItems = category.Subcategorias;
  let route;
  value === 0 ? (route = "plataformas") : (route = "filmes");
  return (
    <>
      <Row gutter={32} justify="center">
        {categoryItems.map((item) => {
          return (
            <NavLink to={`/${route}/${item.Id}`}>
              <Col >
                <Card
                  hoverable
                  style={value === 0 ? { width: 240 } : { width: 290 }}
                  cover={
                    <img
                      style={
                        value === 0
                          ? { width: "240px", height: "240px" }
                          : { width: "290px", height: "180px" }
                      }
                      alt={`Logo ${item.Titulo}`}
                      src={item.Imagem}
                    />
                  }
                  size="small"
                >
                  <Card.Meta title={item.Titulo} />
                </Card>
              </Col>
            </NavLink>
          );
        })}
      </Row>
    </>
  );
};

export default ResultsCards;
