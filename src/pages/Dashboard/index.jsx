import { Input, Carousel, Row, Col } from 'antd';

const { Search } = Input;

const onSearch = value => console.log(value);

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const DashboardPage = ()=>(
  <>
    <h1 style={{textAlign: 'center'}}>O que está procurando?</h1>
    <Row>
      <Col span={12} offset={6}>
        <Search
          placeholder="Filme, série, anime..."
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          />
      </Col>
    </Row>
    <h1 style={{textAlign: 'center'}}>Destaques</h1>
    <Row>
      <Col span={12} offset={6}>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>Filme 1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Filme 2</h3>   
          </div>
          <div>
            <h3 style={contentStyle}>Série 1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Série 2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Série 3</h3>
          </div>
        </Carousel>
      </Col>
    </Row>
  </>
)

export default DashboardPage