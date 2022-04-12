import { Col, Rate, Row, Space } from "antd";
import { useParams } from "react-router";
import PosterImg from "../../components/MoviePic";
import ReviewBox from "../../components/ReviewBox";

const FilmeDetailsPage = props => {
  const params = useParams();
  console.log(params);
  const { id } = params;

  let titulo = "Magnólia";
  let desc = "Um dia em San Fernando Valley, na Califórnia, nos arredores da rua Magnólia, as vidas de nove personagens são interligadas através de um programa de televisão onde um grupo de três crianças desafia três adultos, cujas histórias se cruzam por coincidências do destino.";
  let posterLink = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uq2u8HgtLFJkjNq2kHb2jvipIPT.jpg"

  return (
    <div>
        <Row>
            <Col>
              <PosterImg posterLink={posterLink} />
            </Col>
            <Col flex push={1} sm={{span: 8}} xs={{span: 16}}>
              <h2>{titulo}</h2>
              <p>{desc}</p>
            </Col>
            <Col lg={{span: 10, offset: 0}} md={{span: 10, offset: 4}} sm={{span: 10, offset: 8}} xs={{span: 24, offset: 1}}>
              <ReviewBox />
            </Col>
        </Row>
    </div>
  )
}

export default FilmeDetailsPage