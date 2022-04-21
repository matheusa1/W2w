import { Card, Typography, Divider, Space } from 'antd';
import MovieImages from '../MovieImages';
import Trailer from '../Trailer';

const MediaBox = props => {
    const { Title } = Typography;
    return (
            <Card
            bordered={false}    
            >
            <Title level={2}>Imagens e trailer</Title>
            <Divider style={{ borderWidth: 3 }}/>
            <Space align="center" direction="vertical" size="small">
                <MovieImages src={props.src}/> 
                <Divider />
                <Trailer trailerLink={props.trailerLink}></Trailer>
            </Space>
            </Card>
    );
  }
  
  export default MediaBox;