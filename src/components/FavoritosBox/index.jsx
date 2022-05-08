import { Row, Col, Card } from "antd";

const FavoritosBox = () => {


    return (
        <>
            <Row gutter={16}>
                <Col xxl={6}>
                    <Card hoverable style={{width: 150}} cover={<img style={{width: 150, height: 220}} alt="example" src="https://img.elo7.com.br/product/zoom/1EC7D93/big-poster-do-anime-jojo-s-bizarre-adventure-90x-0-cm-lo029-jojo-no-kimyo-na-boken.jpg"/>}/>
                </Col>
                <Col xxl={6}>
                    <Card hoverable style={{width: 150}} cover={<img style={{width: 150, height: 220}} alt="example" src="https://img.elo7.com.br/product/zoom/2C15759/big-poster-anime-black-clover-lo001-tamanho-90x60-cm-presente-nerd.jpg"/>}/>
                </Col>
                <Col xxl={6}>
                    <Card hoverable style={{width: 150}} cover={<img style={{width: 150, height: 220}} alt="example" src="https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/9/096120140426-posters-series-himym-s5-cover-01.jpg"/>}/>
                </Col>
                <Col xxl={6}>
                    <Card hoverable style={{width: 150}} cover={<img style={{width: 150, height: 220}} alt="example" src="https://sm.ign.com/ign_pt/screenshot/default/spider-man-no-way-home-tom-holland-poster-691x1024_u682.jpg"/>}/>
                </Col>
            </Row>
        </>
    )
}

export default FavoritosBox;
