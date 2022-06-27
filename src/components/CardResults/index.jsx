import { Card, Row, Col } from "antd";
import { NavLink } from "react-router-dom";

const CardResults = ({ data }) => {
  return (
    <>
      {data.map((Content, key) => {
        return (
          <Row gutter={32} justify="center">
            <NavLink to={`/filme/${Content.id}`}>
              <Col>
                <Card
                  key={key}
                  hoverable
                  style={{ width: 290, margin: 15 }}
                  cover={
                    <img
                      alt={Content?.attributes?.title}
                      style={{ width: "290px", height: "180px" }}
                      src={Content?.attributes?.banner?.data?.attributes?.name}
                    />
                  }
                >
                  <Card.Meta title={Content?.attributes?.title} />
                </Card>
              </Col>
            </NavLink>
          </Row>
        );
      })}
    </>
  );
};

export default CardResults;
