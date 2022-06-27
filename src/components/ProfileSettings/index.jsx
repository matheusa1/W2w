import { Typography, Row, Col, Space, Input, Button, message } from "antd";
import { useEffect, useState } from "react";
import  axios  from "axios";
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router";


const ProfileSettings = props => {
  const {Text} = Typography;
  const { TextArea } = Input;
  const { token } = useAuth()
  const [name, setName] = useState();
  const [nick, setNick] = useState();
  const [email, setEmail] = useState();
  const [loc, setLocation] = useState();
  const [desc, setDescription] = useState();
  const navigate = useNavigate()

  async function handleSubmmit(){
    await axios.put("http://localhost:3333/users/me", {
        name,
        username: nick,
        email: email,
        from: loc,
        description: desc
    })
    navigate('/profile')
    message.success('Perfil editado com sucesso!')
  }

  const requestUser = async () => {
    axios.defaults.headers.authorization = `Bearer ${token}`
    const response = await axios.get("http://localhost:3333/users/me")
    setName(response?.data.name)
    setNick(response?.data.username)
    setEmail(response?.data.email)
    setLocation(response?.data.from)
    setDescription(response?.data.description)
  }

  useEffect(() => {
    requestUser();
  }, []);


  return (
    <Space direction="vertical">
        <Text style={{fontSize: 24}} strong>Username</Text>
        <Input size="large" value={nick} onChange={e=>setNick(e.currentTarget.value)}/>
        <br />
        <Input.Group size="large">
            <Row gutter={8}>
                <Col span={24}>
                    <Text style={{fontSize: 24}} strong>Nome</Text>
                    <Input value={name} onChange={e=>setName(e.currentTarget.value)}/>
                </Col>
            </Row>
        </Input.Group>
        <br />
        <Text style={{fontSize: 24}} strong >E-mail</Text>
        <Input size="large" value={email} disabled/>
        <br />
        <Input.Group size="large">
            <Row gutter={8}>
                <Col span={12}>
                    <Text style={{fontSize: 24}} strong>Localização</Text>
                    <Input value={loc} onChange={e=>setLocation(e.currentTarget.value)} />
                </Col>
                <Col span={12}>
                    <Text style={{fontSize: 24}} strong>Website</Text>
                    <Input disabled defaultValue="" />
                </Col>
            </Row>
        </Input.Group>
        <br />
        <Text style={{fontSize: 24}} strong>Bio</Text>
        <TextArea value={desc} onChange={e=>setDescription(e.currentTarget.value)} autoSize={{ minRows: 3, maxRows: 5 }} showCount maxLength={500} allowClear size="large"/>
        <Row gutter={8}>
            <Col span={24}>
                <Button shape="round" size="large" block type="primary" onClick={handleSubmmit}>Salvar mudanças</Button>
            </Col>
        </Row>
    </Space>
  );
};

export default ProfileSettings;
