import { Card, Row, Col } from "antd";
import { NavLink } from "react-router-dom";

const CardResultsPlatforms = ({ data }) => {
  return (
    <>
      {data.map((Content, key) => {
        return (
          <Row gutter={32} justify="center">
            <NavLink to={`/platform/${Content?.id}`}>
              <Col>
                <Card
                  key={key}
                  hoverable
                  style={{ width: 240, margin: 15 }}
                  cover={
                    <img
                      alt={Content?.attributes?.name}
                      style={{ width: "240px", height: "240px" }}
                      src={Content?.attributes?.logo?.data?.attributes?.name}
                    />
                  }
                >
                  <Card.Meta title={Content?.attributes?.name} />
                </Card>
              </Col>
            </NavLink>
          </Row>
        );
      })}
    </>
  );
};

export default CardResultsPlatforms;
