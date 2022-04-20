import { Col, Row } from "antd";
import RegisterForm from "../../components/RegisterForm";
import * as S from "../../components/Title";

const CadastroPage = () => (
  <>
    <S.Title>Cadastre-se</S.Title>
    <Row>
      <Col span={8} offset={8}>
        <RegisterForm />
      </Col>
    </Row>
  </>
);

export default CadastroPage;