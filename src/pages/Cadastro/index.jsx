import { Col, Row, Form, Input, Checkbox, Button } from "antd";
import Axios from "axios";
import * as S from "../../components/Title";

const CadastroPage = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const axios = Axios;
    await axios.post("http://localhost:3333/auth/signup", {
      email: values.email,
      password: values.password,
      username: values.password,
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <>
      <S.Title>CADASTRE-SE</S.Title>
      <Row justify="center">
        <Col span={8}>
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="nickname"
              tooltip="Como gostaria de ser chamado?"
              rules={[
                {
                  required: true,
                  message: "Por favor, informe seu nome de usuário",
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="Nome" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Não é um e-mail válido",
                },
                {
                  required: true,
                  message: "Por favor, informe seu e-mail",
                },
              ]}
            >
              <Input placeholder="E-mail" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Por favor, informe sua senha",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Senha" />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Por favor, confirme sua senha",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error("As senhas não são iguais")
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirmar senha" />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Deve aceitar os termos")),
                },
              ]}
            >
              <Checkbox>
                Eu li e concordo com os <a href="/#">termos</a>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
              >
                Registrar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default CadastroPage;
