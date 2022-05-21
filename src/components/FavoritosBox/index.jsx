import { Row, Col } from "antd";
import FilmCardFav from "../FilmCardFav";

const FavoritosBox = props => {

    return (
        <>
            <Row gutter={16}>
                <Col xxl={6}>
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
                </Col>
            </Row>
        </>
    )
}

export default FavoritosBox;
