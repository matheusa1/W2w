import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    
      return (
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Por favor, insira seu usuário!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nome" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Por favor, insira sua senha!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Senha"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Lembre-se</Checkbox>
            </Form.Item>
    
            <a className="login-form-forgot" href="/login">
              Esqueci minha senha
            </a>
          </Form.Item>
    
          <Form.Item>
            <Button style={{width: '100%'}} type="primary" htmlType="submit" className="login-form-button">
              Entrar
            </Button>
            Ou <a href="/register" >registre-se agora!</a>
          </Form.Item>
        </Form>
    );
}

export default LoginForm;