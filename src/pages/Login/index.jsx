import { Col, Input, Row, Button } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

const LoginPage = () => {
  return (
    <>
      <h2 style={{textAlign: 'center'}} >LOGIN</h2>
      <Row>
        <Col span={6} offset={9}>
          <Input size='large' placeholder="E-mail" />
          <Input.Password
            placeholder="Senha"
            size='large'
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <Row>
            <Col span={6} offset={2}>
              <Button size='large' style={{width: '100%'}} href="/">Entrar</Button>
            </Col>
            <Col span={6} offset={8}>
              <Button size='large' style={{width: '100%'}} href="/">Voltar</Button>
            </Col>
          </Row>
          <p>Não tem conta?</p>
          <a href='/register'> Cadastre-se já</a>
        </Col>
      </Row>
    </>
  )
}

export default LoginPage