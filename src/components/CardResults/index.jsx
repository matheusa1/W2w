import { Card, Row, Col } from "antd";
import { NavLink } from "react-router-dom";

const CardResults = ({ data, searchText }) => {
  let qtdItens = 0;
  return (
    <>
      {data.map((Content, key) => {
        const itemName = Content?.attributes.title.toLowerCase();
        if (itemName.includes(searchText.toLowerCase()) || searchText === "") {
          qtdItens++;
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
                        src={
                          Content?.attributes?.banner?.data?.attributes?.name
                        }
                      />
                    }
                  >
                    <Card.Meta title={Content?.attributes?.title} />
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

export default CardResults;
