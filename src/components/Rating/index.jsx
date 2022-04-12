import { Card, Divider, Rate, Space, Typography } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';


const Rating = props =>{
    const { Text } = Typography;
    const customIcons = {
      1: <FrownOutlined style={{fontSize:40}}/>,
      2: <FrownOutlined  style={{fontSize:40}}/>,
      3: <MehOutlined style={{fontSize:40}}/>,
      4: <SmileOutlined style={{fontSize:40}}/>,
      5: <SmileOutlined style={{fontSize:40}}/>,
    };
    
    return(
        <Card size='small'>
            <Space align="center" direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Text strong style={{fontSize:20}}>Rate</Text>
                <Rate defaultValue={0} character={({ index }) => customIcons[index + 1]} allowHalf/>
            </Space>
        </Card>
    )
}

export default Rating;