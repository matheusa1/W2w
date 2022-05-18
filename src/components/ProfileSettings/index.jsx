import { Typography, Row, Col, Space, Input, Button } from "antd";


const ProfileSettings = props => {
  const {Text, Title} = Typography;
  const { TextArea } = Input;
  

  return (
    <Space direction="vertical">
        <Text style={{fontSize: 24}} strong>Username</Text>
        <Input size="large" defaultValue={props.accName}/>
        <br />
        <Input.Group size="large">
            <Row gutter={8}>
                <Col span={12}>
                    <Text style={{fontSize: 24}} strong>Nome</Text>
                    <Input defaultValue="" />
                </Col>
                <Col span={12}>
                    <Text style={{fontSize: 24}} strong>Sobrenome</Text>
                    <Input defaultValue="" />
                </Col>
            </Row>
        </Input.Group>
        <br />
        <Text style={{fontSize: 24}} strong>E-mail</Text>
        <Input size="large" defaultValue={props.email}/>
        <br />
        <Input.Group size="large">
            <Row gutter={8}>
                <Col span={12}>
                    <Text style={{fontSize: 24}} strong>Localização</Text>
                    <Input defaultValue="" />
                </Col>
                <Col span={12}>
                    <Text style={{fontSize: 24}} strong>Website</Text>
                    <Input defaultValue="" />
                </Col>
            </Row>
        </Input.Group>
        <br />
        <Text style={{fontSize: 24}} strong>Bio</Text>
        <TextArea autoSize={{ minRows: 3, maxRows: 5 }} showCount maxLength={500} allowClear size="large"/>
        <Row gutter={8}>
            <Col span={12}>
                <Button shape="round" size="large" block>Alterar senha</Button>
            </Col>
            <Col span={12}>
                <Button shape="round" size="large" block type="primary">Salvar mudanças</Button>
            </Col>
        </Row>
        <Button  shape="round" size="large" block danger>DESATIVAR CONTA</Button>
    </Space>
  );
};

export default ProfileSettings;
