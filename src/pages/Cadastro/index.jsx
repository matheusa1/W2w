import { Col, Input, Row, Button } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

const CadastroPage = ()=>(
  <>
    <h2 style={{textAlign: 'center'}}>Cadastro</h2>
    <Row>
      <Col span={12} offset={6}>
        <Input size='large' placeholder="Nome" />
        <Input size='large' placeholder="E-mail" />
        <Input size='large' placeholder="Confirmar e-mail" />
        <Input.Password
          placeholder="Senha"
          size='large'
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <Input.Password
          placeholder="Confirmar Senha"
          size='large'
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <Row>
          <Col span={6} offset={2}>
            <Button size='large' style={{width: '100%'}} href="/login">Pronto</Button>
          </Col>
          <Col span={6} offset={8}>
            <Button size='large' style={{width: '100%'}} href="/">Voltar</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </>
)

export default CadastroPage