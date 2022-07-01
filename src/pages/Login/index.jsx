import { Col, Row, Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import * as S from "../../components/Title";
import Axios from "axios";
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router";

const LoginPage = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const axios = Axios;
    try {
      await axios.post("http://localhost:3333/auth/signin", {
        email: values.email,
        password: values.password,
      })
      auth.signIn({
        email: values.email,
        password: values.password,
      })
      navigate('/')
    } catch (ex) {
      message.error('Email ou senha invalidos.')
    }
  };

  return (
    <>
      <S.Title>LOGIN</S.Title>
      <Row justify="center">
        <Col span={8}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira seu email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira sua senha!",
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
              <Button
                style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Entrar
              </Button>
              Ou <a href="/register">registre-se agora!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
