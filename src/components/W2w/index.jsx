import { Divider, List, Card, Row, Avatar, Typography, Space } from 'antd';
import Meta from 'antd/lib/card/Meta';

const W2w = props => {
    const { Text, Title } = Typography;
    const data = [
    {
        title: 'Apple TV+',
        desc: "Link",
        pic_link: "https://cdn-icons-png.flaticon.com/512/831/831330.png",
        link: "https://www.apple.com/br/apple-tv-plus/",
    },
    {
        title: 'Amazon Prime Video',
        desc: "Link",
        pic_link: "https://img.utdstc.com/icon/8d0/5dc/8d05dcf1d6034e9b6dffbab81f64ca8e61a135cc2c738e641b081d4611ba3ca2:200",
        link: "https://www.primevideo.com/?ref_=dvm_pds_amz_br_dc_s_g_mkw_sXLDNUYyr-dc_pcrid_388732931005&mrntrk=slid__pgrid_62046161446_pgeo_9102202_x__ptid_kwd-297838409645",
    },
    ];
        return (
            <Row>
                <Card align="center">
                <Title ia level={3}>Where 2 Watch</Title>
                <Divider />
                <List
                grid={{ gutter: 2, column: 1 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card >
                            <Space align="center" direction="vertical" size="middle" style={{ display: 'flex' }}>
                                <Space align="center" direction="horizontal" size="middle" style={{ display: 'flex' }}>
                                    <Meta
                                    avatar={<Avatar src={item.pic_link} />}
                                    title={item.title}
                                    />
                                </Space>
                                <a href={item.link} target="_blank" style={{fontSize:15}}>
                                    {item.desc}
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