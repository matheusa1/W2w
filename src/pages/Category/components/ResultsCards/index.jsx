import { Card, Col, Row } from "antd";
import { NavLink } from "react-router-dom";

const ResultsCards = ({ value, category }) => {
  let route;
  value === 0 ? (route = "platforms") : (route = "media");
  return (
    <>
      <Row gutter={32} justify="center">
        {category.map((item) => {
          return (
            <NavLink to={`/${route}/${item.id}`}>
              <Col>
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
                      alt={`Logo ${item.attributes.name}`}
                      src={item.attributes.logo.data.attributes.url}
                    />
                  }
                  size="small"
                >
                  <Card.Meta title={item.attributes.name} />
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
