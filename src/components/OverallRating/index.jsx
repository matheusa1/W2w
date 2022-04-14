import { Card, Divider, Space, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';

const OverRate = props =>{
    const { Text, Link } = Typography;
    return(
        <Card size='small'>
            <Space align="center" direction="horizontal" size="small" style={{ display: 'flex' }}>
                <Space align="center" direction="vertical" size="small" style={{ display: 'flex' }}>
                    <Text italic>Nota de usários</Text>
                    <Space align="start" direction="horizontal" size="small" style={{ display: 'flex' }}>
                        <StarFilled style={{ fontSize:20, color:"#fadb14"}}/>
                        <Text strong>{props.rate}</Text>
                    </Space>
                </Space>
                <Divider type='vertical' orientation='left' />
                    <Space align="center" direction="vertical" size="small" style={{ display: 'flex' }}>
                            <Text italic>Nota do <Link href='https://www.imdb.com/title/tt0175880/' italic target="_blank">IMDB</Link></Text>
                            <Space align="start" direction="horizontal" size="small" style={{ display: 'flex' }}>
                                <StarFilled style={{fontSize:20, color:"#fadb14"}}/>
                                <Text strong>{props.rateIMDB}</Text>
                            </Space>
                    </Space>
            </Space>
        </Card>
    )
}

export default OverRate;