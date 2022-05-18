import { Typography, Row, Col, Divider } from "antd";
import EditAvatar from "../../components/EditAvatar";
import ProfileSettings from "../../components/ProfileSettings";


const EditProfile = () => {
  const {Text, Title} = Typography;
  let profName = "Serggio22";
  let email = "Serggio22@gmail.com";

  return (
    <>
      <Row>
        <Col xxl={{push: 1}} xl={{push: 2}} lg={{push: 1}} md={{push: 6}} sm={{span: 16, push: 4}} xs={{span: 16, push: 4}}>
          <Title>Configurações do perfil</Title>
        </Col>
      </Row>  
      <Divider />
      <Row gutter={8}>
            <Col xxl={{span: 14, push: 2}} xl={{span: 10, push: 2}} lg={{span: 10, push: 1}} md={{span: 24, push: 1}} sm={{span: 24}}>
              <ProfileSettings accName={profName} email={email}/>
            </Col>
            <Col xxl={{span: 10, push: 0, pull: 1}} xl = {{span: 8, push: 4, pull: 0}} lg={{span: 8, push: 4, pull: 0}} md={{span: 24 ,pull: 0}} sm={{span: 24 ,pull: 0}} xs={{span: 24 ,pull: 0}}>
              <EditAvatar />
            </Col>
        </Row>
    </>
  );
};

export default EditProfile;
