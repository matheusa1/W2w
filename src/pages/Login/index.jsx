import {Row, Col} from 'antd';
import { Title } from './styles';
import  LoginForm  from '../../components/LoginForm';

const LoginPage = () => {
  return(
    <>
      <Col span={8} offset={8}>
        <Title>Login</Title>
        <LoginForm />
      </Col>
    </>    
  )
}

export default LoginPage