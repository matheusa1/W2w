import { Card, Rate, Row } from 'antd';

const Rating = props =>{
    
    return(
        <Card size='small'>
            <Row justify='Center'>
                <Rate allowHalf/>
            </Row>
        </Card>
    )
}

export default Rating;