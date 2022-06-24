import { Row, Col, Divider } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "../../components/UserList";
import TextBox from "../../components/TextBox";
import TotalWatched from "../../components/TotalWatched";
import { useAuth } from "../../hooks/auth"

const ProfilePage = () => {

  const { token } = useAuth()
  const [nick, setNick] = useState();
  const [loc, setLocation] = useState();
  const [desc, setDescription] = useState();

  const requestUser = async () => {
    axios.defaults.headers.authorization = `Bearer ${token}`
    const { data } = await axios.get("http://localhost:3333/users/me")
    setNick(data.username)
    setLocation(data.from)
    setDescription(data.description)
    console.log(data)
  }
  useEffect(() => {
    requestUser();
  }, []);
 
  let Watched = 10;
  let Pic = 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png'
  let Poster = "https://img.elo7.com.br/product/zoom/2C15759/big-poster-anime-black-clover-lo001-tamanho-90x60-cm-presente-nerd.jpg"
  let Title = "Black Clover"

  return (
  <>
    <Row justify="center">    
        <Col xxl={{pull: 0, span: 6}} xl={{pull: 0, span: 6}} lg={{pull: 0, span: 6}} md={{pull: 0, span: 8}} sm={{pull: 0, span: 12}} xs={{ pull: 2, span: 16 }} >
          <TextBox Name={nick} Bio={desc} Pic={Pic} From={loc}/>
        </Col>
        <Row align="bottom">
          <Col xxl={{push: 24}} xl={{push: 24}} lg={{push: 24}} md={{push: 24}} sm={{push: 24}} >
            <TotalWatched Watched={Watched}/>
          </Col>
        </Row>
      <Divider/>
      <div>
        <Row justify="center">
          <Col >
            <h2>Minha Lista</h2>
          </Col>
        </Row>
          <br/>
          <Col>
            <UserList Poster={Poster} Title={Title}/>
          </Col>
      </div> 
    </Row>
  </>
  )
};

export default ProfilePage;
