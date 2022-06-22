import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAuth } from "../../hooks/auth";
import getErrorMessages from "../../helpers/getErrorMessage";
import axios from "axios";

const LoginForm = () => {
  const { signIn } = useAuth();
  const onFinish = async (values) => {
    try {
      await signIn({
        email: values?.email,
        password: values?.password,
      });
    } catch (ex) {
      const errorMsg = getErrorMessages(ex);
      errorMsg?.forEach((element) => {
        message.error(element);
      });
    }

    const { data } = await axios.get("http://localhost:3333/users/me");
    console.log({ data });
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
          placeholder="Nome"
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
  );
};

export default LoginForm;
