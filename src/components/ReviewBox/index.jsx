import { Row, Card, Space } from "antd"
import OverRate from "../OverallRating"
import Rating from "../Rating"
import W2w from "../W2w"


const ReviewBox = props => {

    return (
    <Row 
    justify="end">
        <Card style={{width: 400, backgroundColor: '#363636'}}
        cover={
            <img
            alt="example"
            height={200}
            src={props.banner}
            />
        }
        >
            <Space align="center" direction="vertical" size="middle">
                        <Rating />
                        <OverRate rate={props.rate} rateIMDB={props.rateIMDB}/>
                        <W2w />
                </Space>
        </Card>
        </Row>
    )
}

export default ReviewBox;