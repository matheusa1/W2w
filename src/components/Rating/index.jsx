import { Card, Divider, Rate, Space, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';


const Rating = props =>{
    const { Text } = Typography;
    return(
        <Card size='small'>
            <Space align="center" direction="vertical" size="small" style={{ display: 'flex' }}>
                <Text strong style={{fontSize:20}}>Rate</Text>
                <Rate defaultValue={0} character={<StarFilled />} allowHalf style={{fontSize:36}}/>
            </Space>
        </Card>
    )
}

export default Rating;