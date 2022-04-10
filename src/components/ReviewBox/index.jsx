import { Divider, Col, Row, Card, Space } from "antd"
import HeartFav from "../HeartFav"
import Rating from "../Rating"
import W2w from "../W2w"


const ReviewBox = props => {

    return (
    <Row 
    justify="end">
        <Card style={{ width: 400, backgroundColor: '#474747' }}
        cover={
            <img
            alt="example"
            src="https://images7.alphacoders.com/807/thumb-1920-807296.jpg"
            />
        }
        >
            <Divider orientation="center">
                    <Col span={4}>
                        <Divider>
                            <HeartFav />
                            <Divider>
                                <Rating />
                            </Divider>
                            <Divider>
                                <W2w />
                            </Divider>
                        </Divider>
                    </Col>
                </Divider>
        </Card>
        </Row>
    )
}

export default ReviewBox;