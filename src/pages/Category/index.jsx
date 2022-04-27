import { Button, Row, Col } from "antd";

const CategoryPage = () => {

  [ "Plataformas", "Filmes", "Séries", "Animes"].foreach(data) {
    return (
  }

  return (
    <>
      <Row justify="space-evenly">
        <Col span={3}>
          <Button
            type="primary"
            shape="round"
            size="large"
            style={{ width: "100%", height: "3rem", minWidth: "120px" }}
          >
            Plataformas
          </Button>
        </Col>
        <Col span={3}>
          <Button
            type="primary"
            shape="round"
            size="large"
            style={{ width: "100%", height: "3rem", minWidth: "120px" }}
          >
            Filmes
          </Button>
        </Col>
        <Col span={3}>
          <Button
            type="primary"
            shape="round"
            size="large"
            style={{ width: "100%", height: "3rem", minWidth: "120px" }}
          >
            Séries
          </Button>
        </Col>
        <Col span={3}>
          <Button
            type="primary"
            shape="round"
            size="large"
            style={{ width: "100%", height: "3rem", minWidth: "120px" }}
          >
            Animes
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CategoryPage;
