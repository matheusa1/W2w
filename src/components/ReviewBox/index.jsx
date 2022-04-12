import { Col, Row, Card, Space } from "antd"
import HeartFav from "../HeartFav"
import Rating from "../Rating"
import W2w from "../W2w"


const ReviewBox = props => {

    return (
    <Row 
    justify="end">
        <Card style={{width: 400, backgroundColor: '#c0bdd9'}}
        cover={
            <img
            alt="example"
            src="https://images7.alphacoders.com/807/thumb-1920-807296.jpg"
            />
        }
        >
            <Space align="center" direction="vertical" size="middle" style={{ display: 'flex' }} >
                        <HeartFav />
                        <Rating />   
                        <W2w />
                </Space>
        </Card>
        </Row>
    )
}

export default ReviewBox;