import { List, Card } from 'antd';

const W2w = props => {
    const data = [
    {
        title: 'Apple TV+',
        desc: "Aluguel",
        link: "https://www.apple.com/br/apple-tv-plus/",
    },
    {
        title: 'Amazon Prime Video',
        desc: "Aluguel",
        link: "https://www.primevideo.com/?ref_=dvm_pds_amz_br_dc_s_g_mkw_sXLDNUYyr-dc_pcrid_388732931005&mrntrk=slid__pgrid_62046161446_pgeo_9102202_x__ptid_kwd-297838409645",
    },
    ];
        return (
            <List
            grid={{ gutter: 2, column: 1 }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card title={item.title}>
                    <a href={item.link} target="_blank">
                        {item.desc}
                    </a>
                </Card>
              </List.Item>
            )}
          />
    )
}

export default W2w;