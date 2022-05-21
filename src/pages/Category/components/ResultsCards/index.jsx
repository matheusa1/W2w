import { Card, Col, Row } from "antd";
import { NavLink } from "react-router-dom";

const ResultsCards = ({ value, category, searchText }) => {
  const route = value === 0 ? "platforms" : "filme";
  const itens = value === 0 ? category : category?.attributes.media.data;
  console.log(itens);

  return (
    <>
      <Row gutter={32} justify="center">
        {itens.map((Content) => {
          const itemName =
            value === 0
              ? Content.attributes.name.toLowerCase()
              : Content?.attributes.title.toLowerCase();
          if (
            itemName.includes(searchText.toLowerCase()) ||
            searchText === ""
          ) {
            return (
              <NavLink to={`/${route}/${Content?.id}`}>
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
                        alt={`Logo ${Content?.attributes.logo}`}
                        src={
                          value === 0
                            ? Content?.attributes.logo.data.attributes.name
                            : Content?.attributes.banner.data.attributes.name
                        }
                      />
                    }
                    size="small"
                  >
                    <Card.Meta
                      title={
                        value === 0
                          ? Content?.attributes.name
                          : Content?.attributes.title
                      }
                    />
                  </Card>
                </Col>
              </NavLink>
            );
          }
        })}
      </Row>
    </>
  );
};

export default ResultsCards;
