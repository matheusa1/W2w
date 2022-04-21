import { Image, Card, Space, Divider, Typography } from 'antd';

const ClassifcEt = props => {
    const { Text } = Typography;

    return (
        <Card size='small' style={{backgroundColor:"#363636"}}>
            <Space align='center' direction='horizontal'>
                <Image
                preview={false}
                width={50}
                src='https://logodownload.org/wp-content/uploads/2017/07/classificacao-14-anos-logo.png'>
                </Image>
                <Divider  type='vertical' style={{ borderWidth: 2, borderColor: 'white', height: 25 }}/>
                <Text style={{color:"white"}}>Não recomendado para menores de 14 anos</Text>
            </Space>
        </Card>
    );
  }
  
  export default ClassifcEt;