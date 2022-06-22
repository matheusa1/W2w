import { Row, Col } from "antd";
import FilmCardFav from "../FilmCardFav";

const FavoritosBox = (props) => {
  const filmes = props;
  console.log(filmes);

  return (
    <>
      <Row gutter={16}>
        {/* {filmes?.map((filme, index) => (
          <Col key={index} span={8}>
            <FilmCardFav Title={filme?.Title} Poster={filme?.Poster} />
          </Col>
        ))} */}

        {/* <Col xxl={6}>
                    <FilmCardFav Poster={props.Poster} Title={props.Title}/>
                </Col>
                <Col xxl={6}>
                    <FilmCardFav Poster={props.Poster} Title={props.Title}/>
                </Col>
                <Col xxl={6}>
                    <FilmCardFav Poster={props.Poster} Title={props.Title}/>
                </Col>
                <Col xxl={6}>
                    <FilmCardFav Poster={props.Poster} Title={props.Title}/>
                </Col> */}
      </Row>
    </>
  );
};

export default FavoritosBox;
