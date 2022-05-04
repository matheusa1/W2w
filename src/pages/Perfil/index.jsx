import { Row, Col, Divider } from "antd";
import FavoritosBox from "../../components/FavoritosBox";
import TextBox from "../../components/TextBox";

const ProfilePage = () => {
 
  let Name = 'Andreias Pereira'
  let Bio = 'Tô fazendo nadammmmm vô vê uns filminho. Meu ódio por Hollywood é algo extremamente real. Queria que Sion Sono fosse meu pai.'

  return (
  <>
    <Row justify="center">    
        <Col xxl={{pull: 0, span: 6}} xl={{pull: 0, span: 6}} lg={{pull: 0, span: 6}} md={{pull: 0, span: 8}} sm={{pull: 0, span: 12}} xs={{ pull: 2, span: 16 }} >
          <TextBox Name={Name} Bio={Bio}/>
        </Col>
      <Divider/>
      <div>
        <Col >
          <h2>Favoritos</h2>
        </Col>
        <br/>
        <Col>
          <FavoritosBox/>
        </Col>
      </div> 
    </Row>
    <br/>
    <Row justify="center">
        <div>
            <Col >
                <h2>Assistidos recentemente</h2>
            </Col>
            <br/>
            <Col>
                <FavoritosBox/>
            </Col>
        </div>
    </Row>
  </>
  )
};

export default ProfilePage;
