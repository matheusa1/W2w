import { Card, Typography, Divider, Space } from 'antd';
import MovieImages from '../MovieImages';
import Trailer from '../Trailer';

const MediaBox = props => {
    const { Text, Title } = Typography;
    return (
            <Card
            bordered={false}    
            >
            <Title level={2}>Imagens e trailer</Title>
            <Divider/>
            <Space align="center" direction="vertical" size="small">
                <MovieImages src={props.src}/> 
                <Divider />
                <Trailer trailerLink={props.trailerLink}></Trailer>
            </Space>
            </Card>
    );
  }
  
  export default MediaBox;