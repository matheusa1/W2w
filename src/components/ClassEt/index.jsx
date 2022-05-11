import { Image, Card, Space, Divider, Typography, Button } from 'antd';

const ClassifcEt = props => {
    const { Text } = Typography;
    const age = props.age;
    let n_age;
    let _src;

    function chose_age() {
        switch ({age}) {
            case "livre":
                _src='https://logodownload.org/wp-content/uploads/2017/07/classificacao-livre-logo.png'
                break;
            case "e12":
                _src='https://logodownload.org/wp-content/uploads/2017/07/classificacao-12-anos-logo.png'
                break;
            case "e14":
                _src='https://logodownload.org/wp-content/uploads/2017/07/classificacao-14-anos-logo.png'
                break;
            case "e16":
                _src='https://logodownload.org/wp-content/uploads/2017/07/classificacao-16-anos-logo.png'
                break;
            case "e18":
                _src='https://logodownload.org/wp-content/uploads/2017/07/classificacao-18-anos-logo.png'
                break;
        }

    }

    return (

        <Card size='small' style={{backgroundColor:"#363636"}}>
            <Space align='center' direction='horizontal'>
                <Image
                preview={false}
                width={50}
                src="">
                </Image>
                <Divider  type='vertical' style={{ borderWidth: 2, borderColor: 'white', height: 25 }}/>
                <Text style={{color:"white"}}>Não recomendado para menores de {age} anos</Text>
            </Space>
        </Card>
    );
  }
  
  export default ClassifcEt;