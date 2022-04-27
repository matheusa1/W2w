import { Col, Row } from "antd";
import * as S from "../../components/Title";
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <>
    <S.Title>LOGIN</S.Title>    
    <Row justify="center">
      <Col span={8}>
        <LoginForm />
      </Col>
    </Row>
      
    </>
  );
};

export default LoginPage;
