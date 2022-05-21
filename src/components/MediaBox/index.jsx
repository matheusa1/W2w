import { Carousel, Card, Typography, Divider, Space, Image, Row } from 'antd';
import Trailer from '../Trailer';

const MediaBox = (props = [])  => {
    const { Title } = Typography;
    return (
            <Card
            bordered={false}
            >
                <Title level={2}>Imagens e trailer</Title>
                    <Divider style={{ borderWidth: 3 }}/>
                        <Carousel src={props?.src} autoplay dotPosition={'left'}>
                            <div>
                                <Image
                                alt='Image1'
                                src={props?.src?.[0]}
                                >
                                </Image>
                            </div>
                            <div>
                                <Image
                                alt='Image2'
                                src={props?.src?.[1]}
                                >
                                </Image>
                            </div>
                            <div>
                                <Image
                                alt='Image3'
                                src={props?.src?.[2]}
                                >
                                </Image>
                            </div>
                        </Carousel>
                        <Divider />
                        <Row justify='center'>
                            <Trailer trailerLink={props?.trailerLink}></Trailer>
                        </Row>
            </Card>
    );
  }
  
  export default MediaBox;