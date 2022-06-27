import { Typography, Space, Divider, Image, Row, Col } from "antd";
import { Footer } from "antd/lib/layout/layout";
import { QuestionCircleOutlined } from '@ant-design/icons';

const FooterC = props => {
    const { Text, Title, Link } = Typography;

    return(
        <Footer style={{backgroundColor: "#160621"}}>
            <Row justify="center">
                <Col>
                    <Text style={{color: "#e4dfe8"}}>W2w</Text>
                    <Divider type='vertical' style={{ borderWidth: 2, borderColor: 'white', height: 15 }}/>
                </Col>
                <Col>
                    <Link style={{color: "#e4dfe8"}}>
                        <QuestionCircleOutlined />
                        <Text style={{color: "#e4dfe8"}}> Sobre</Text>
                    </Link>
                </Col>
            </Row>
            <Divider style={{ borderWidth: 1, borderColor: 'white' }}/>
            <Row justify="center">
                <Space align="center">
                    <Col>
                    <Title style={{color: "#e4dfe8"}} level={5}>Feito com Ant Design</Title>
                    </Col>
                    <Col>
                    <Image preview={false} height={30} width={30} src="https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png"/>
                    </Col>
                </Space>
            </Row>
      </Footer>
    )
}

export default FooterC;