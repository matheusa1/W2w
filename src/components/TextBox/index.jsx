import { Typography, Space, Card, Col, Row } from 'antd';

const TextBox = props => {
    const Text = Typography;
    let FontSize = 20;

    return (
        <Card>
            <Space direction='vertical' align='center'>
                <Col>
                    <Text style={{fontSize: FontSize}}>Nome:</Text>          
                </Col>
                <Col>
                    <Text style={{fontSize: FontSize}}>{props.Name}</Text>          
                </Col>
                <Col>
                    <Text style={{fontSize: FontSize}}>Email:</Text>           
                </Col>
                    <Text style={{fontSize: FontSize}}>{props.Email}</Text>           
                <Col>
                    <Text style={{fontSize: FontSize}}>Telefone:</Text>              
                </Col>
                <Col>
                    <Text style={{fontSize: FontSize}}>{props.Telefone}</Text>              
                </Col>
                <Col>
                    <Text style={{fontSize: FontSize}}>Senha:</Text>
                </Col>
                <Col>
                    <Text style={{fontSize: FontSize}}>{props.Senha}</Text>
                </Col>                         
            </Space>
        </Card>
    )
}

export default TextBox