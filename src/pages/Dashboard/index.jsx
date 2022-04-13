import { Input, Carousel, Row, Col } from 'antd'
import { NavLink } from 'react-router-dom';
import { Title } from '../../components/Title'
import * as S from './styles'

const { Search } = Input;

const contentStyle = {
  width: '100%',
  height: '37.5rem',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const filmesDestaques = [
  {nome: 'Batman', id: '01', img: 'https://cdn.ome.lt/d1WxTqmMEO3bA8lIHgGF_fPjZj0=/1200x630/smart/extras/conteudos/the_batman.jpg'},
  {nome: 'Esposa de mentirinha', id: '02', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8qAIRKHSShHbedNoIXsIk5W1x467VGiyvluBMQSO8iR9G1tDb6OSRf4-T4hnvibVZBU&usqp=CAU'},
  {nome: 'Vingadores Ultimato', id: '03', img: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2019/05/legiao_aOjGzon9_hclWBK5g41Y6qMHASxZtbXimL2NEeIQD8.png.jpeg'},
  {nome: 'Tokyo Revengers', id: '04', img: 'https://pbs.twimg.com/media/E5ib1mmXIAA0cw4.jpg:large'},
  {nome: 'Cada um tem a gêmea que parece', id: '05', img: 'http://4.bp.blogspot.com/-EAOluQNVeyo/TzQaV4zF0mI/AAAAAAAAAbQ/1-VaqYpruIE/w1200-h630-p-k-no-nu/cada-um-tem-a-irma-que-merece-poster-14ou2011.jpg'}
]

const DashboardPage = ()=> {

  const onSearch = (value) => {
    console.log(value)
  }

  return(
    <>
      <Col span={8} offset={8}>
        <S.MainText>O que está procurando</S.MainText>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        <Title>Destaques</Title>
      </Col>
      <Col span={16} offset={4}>
        <Carousel autoplay dotPosition={'top'}>
          {filmesDestaques.map(filme => {
            return(
              <NavLink to={`/filme/${filme.id}`}>
                <div key={filme.id} >  
                  <img style={contentStyle} src={filme.img} alt={filme.nome}/>
                  <p>{filme.nome}</p>
                </div>
              </NavLink>
            )
          })}
        </Carousel>
      </Col>
    </>
  )
  }

export default DashboardPage