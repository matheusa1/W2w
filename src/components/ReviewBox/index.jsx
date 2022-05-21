import { Row, Card, Space } from "antd"
import OverRate from "../OverallRating"
import Rating from "../Rating"
import W2w from "../W2w"


const ReviewBox = props => {

    return (
    <Row justify="end">
        <Card style={{width: 400, backgroundColor: '#363636'}}
        cover={
            <img
            height={200}
            src={props.banner}
            />
        }
        >
            <Row justify="center">
                <Space direction="vertical" align="center">
                        <Rating />
                        <OverRate rate={props.rate} rateIMDB={props.rateIMDB}/>
                        <W2w plat_data={props.plat_data} />
                </Space>
                </Row>
        </Card>
        </Row>
    )
}

export default ReviewBox;