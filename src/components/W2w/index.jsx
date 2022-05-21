import { Divider, List, Card, Row, Avatar, Typography, Space } from 'antd';
import Meta from 'antd/lib/card/Meta';

const W2w = props => {
    const { Text, Title } = Typography;
    const data = props.plat_data;
        return (
            <Row>
                <Card align="center">
                <Title level={3}>Where 2 Watch</Title>
                <Divider />
                <List
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card style={{width:280}}>
                            <Space align="center" direction="vertical" size="middle">
                                <Space align="center" direction="horizontal" size="middle">
                                    <Meta
                                    avatar={<Avatar src={"http://localhost:1337" + item?.logo?.data?.attributes?.formats?.thumbnail?.url} />}
                                    title={item.name}
                                    />
                                </Space>
                                <a href={item.link} target="_blank" style={{fontSize:15}}>
                                    Link
                                </a>
                                </Space>
                                </Card>
                        </List.Item>
                    )}
                />
            </Card>
            </Row>

    )
}

export default W2w;