import { Row, Col } from "antd";
import FilmCardWatched from "../FilmCardWatched";

const WatchedBox = props => {

    return (
        <>
            <Row gutter={16}>
                <Col xxl={6}>
                    <FilmCardWatched Poster={props.Poster} Rate={props.Rate} Title={props.Title}/>
                </Col>
                <Col xxl={6}>
                    <FilmCardWatched Poster={props.Poster} Rate={props.Rate} Title={props.Title}/>
                </Col>
                <Col xxl={6}>
                    <FilmCardWatched Poster={props.Poster} Rate={props.Rate} Title={props.Title}/>
                </Col>
                <Col xxl={6}>
                    <FilmCardWatched Poster={props.Poster} Rate={props.Rate} Title={props.Title}/>
                </Col>
            </Row>
        </>
    )
}

export default WatchedBox;