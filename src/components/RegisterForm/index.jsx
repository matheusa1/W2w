import { Form, Input, Checkbox, Button } from 'antd';

const RegisterForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'Não é um e-mail válido',
          },
          {
            required: true,
            message: 'Por favor, informe seu e-mail',
          },
        ]}
      >
        <Input placeholder='E-mail'/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Por favor, informe sua senha',
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder='Senha'/>
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Por favor, confirme sua senha',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('As senhas não são iguais'));
            },
          }),
        ]}
      >
        <Input.Password placeholder='Confirmar senha'/>
      </Form.Item>

      <Form.Item
        name="nickname"
        tooltip="Como gostaria de ser chamado?"
        rules={[
          {
            required: true,
            message: 'Por favor, informe seu nome',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder='Nome'/>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Deve aceitar os termos')),
          },
        ]}
      >
        <Checkbox>
          Eu li e concordo com os <a href="/#">termos</a>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Registrar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm