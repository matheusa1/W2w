import { Col, Row } from 'antd'
import RegisterForm from '../../components/RegisterForm'
import { Title }from './styles'

const CadastroPage = ()=>(
  <>
    <Title>CADASTRE-SE</Title>
    <Row >
      <Col span={8} offset={8}>
        <RegisterForm />
      </Col>
    </Row>
  </>
)

export default CadastroPage