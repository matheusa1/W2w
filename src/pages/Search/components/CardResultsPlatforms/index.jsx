import { Card, Row, Col } from "antd";
import { NavLink } from "react-router-dom";

const CardResultsPlatforms = ({ data, searchText }) => {
  let qtdItens = 0;
  return (
    <>
      {data.map((Content, key) => {
        const itemName = Content.attributes.name.toLowerCase();
        if (itemName.includes(searchText.toLowerCase()) || searchText === "") {
          qtdItens++;
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
        } else if (qtdItens === 0 && key === 1) {
          return (
            <>
              <img
                style={{ width: "100px", height: "100px" }}
                src="https://imagepng.org/wp-content/uploads/2017/10/facebook-triste-emoji-icone-1.png"
              />
            </>
          );
        }
      })}
    </>
  );
};

export default CardResultsPlatforms;
