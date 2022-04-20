import { Col } from "antd";
import * as S from "../../components/Title";
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Col span={8} offset={8}>
        <S.Title>Login</S.Title>
        <LoginForm />
      </Col>
    </>
  );
};

export default LoginPage;
