import { Col, Row, Typography, Divider } from "antd";
const Sobre = () => {

  const { Text, Title, Link } = Typography;


  return (
    <Row justify="center">
        <Col span={12} xxl={8} xl={12} lg={12}>
            <Title italic style={{fontSize: 64}}>Todos os seus serviços de<br></br>streaming em um lugar.</Title>
            <Divider />
            <Text style={{fontSize: 32}}>Quer assistir um filme, uma série ou um anime mas não sabe onde encontra-lo?</Text>
            <Text style={{fontSize: 32}}> Sem estresse.</Text>
            <Text style={{fontSize: 32}}> Nós temos a <Link href="http://localhost:3000/search">solução</Link> para seu problema.</Text>
        </Col>
    </Row>
  )
}

export default Sobre;