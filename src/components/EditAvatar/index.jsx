import { Typography, Row, Avatar, Divider, Button, Card, Space, Col } from "antd";
import { UserOutlined } from '@ant-design/icons';


const EditAvatar = props => {
  const {Text, Title} = Typography;
  const { Meta } = Card;


  const bg ="https://st.depositphotos.com/3265665/4462/i/450/depositphotos_44627471-stock-photo-transparent.jpg"

  return (
      <>
      <Title level={2}>Editar Avatar</Title>
        <Card >
            <Row justify="center">
                <Avatar style={{ backgroundColor: '#62beff' }} size={250} icon={<UserOutlined />}></Avatar>
            </Row>
            <Divider />
            <Row>
                <Button shape="round" size="large" block type="primary">Alterar Avatar</Button>
            </Row>
            <br/>
            <Row>
                <Button danger shape="round" size="large" block >Remover</Button>
            </Row>
        </Card>
      </>
  );
};

export default EditAvatar;
