import { Row, Col, Divider } from "antd";
import FavoritosBox from "../../components/FavoritosBox";
import TextBox from "../../components/TextBox";
import TotalWatched from "../../components/TotalWatched";

const ProfilePage = () => {
 
  let Watched = 10;
  let Pic = 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png'
  let Name = 'Andreias Pereira'
  let Bio = 'Tô fazendo nadammmmm vô vê uns filminho. Meu ódio por Hollywood é algo extremamente real. Queria que Sion Sono fosse meu pai.'

  return (
  <>
    <Row justify="center">    
        <Col xxl={{pull: 0, span: 6}} xl={{pull: 0, span: 6}} lg={{pull: 0, span: 6}} md={{pull: 0, span: 8}} sm={{pull: 0, span: 12}} xs={{ pull: 2, span: 16 }} >
          <TextBox Name={Name} Bio={Bio} Pic={Pic}/>
        </Col>
        <Row align="bottom">
          <Col xxl={{push: 24}} xl={{push: 24}} lg={{push: 24}} md={{push: 24}} sm={{push: 24}} >
            <TotalWatched Watched={Watched}/>
          </Col>
        </Row>
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
