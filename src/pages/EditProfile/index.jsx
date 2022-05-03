import { Typography, Row, Col, Space, Divider } from "antd";
import EditAvatar from "../../components/EditAvatar";
import ProfileSettings from "../../components/ProfileSettings";


const EditProfile = () => {
  const {Text, Title} = Typography;
  let profName = "Serggio22";
  let email = "Serggio22@gmail.com";

  return (
    <>
      <Row>
        <Col span={24}>
          <Title>Configurações do perfil</Title>
        </Col>
      </Row>  
      <Divider />
      <Row gutter={8}>
            <Col span={12}>
              <ProfileSettings accName={profName} email={email}/>
            </Col>
            <Col span={12}>
              <EditAvatar />
            </Col>
        </Row>
    </>
  );
};

export default EditProfile;
