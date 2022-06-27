import { Image, Card, Space, Divider, Typography, Button } from 'antd';



const ClassifcEt = props => {
    const { Text } = Typography;
    
    function chose_age(age) {
        switch (age) {
            case "livre":
                return {
                    _src:'https://logodownload.org/wp-content/uploads/2017/07/classificacao-livre-logo.png',
                    Texto : "Livre para todos os públicos"
                }
            case "e12":
                return {
                    _src:'https://logodownload.org/wp-content/uploads/2017/07/classificacao-12-anos-logo.png',
                    Texto : "Não recomendado para menores de 12 anos"
                }
            case "e14":
                return {
                    _src:'https://logodownload.org/wp-content/uploads/2017/07/classificacao-14-anos-logo.png',
                    Texto : "Não recomendado para menores de 14 anos"
                }
            case "e16":
                return {
                    _src:'https://logodownload.org/wp-content/uploads/2017/07/classificacao-16-anos-logo.png',
                    Texto : "Não recomendado para menores de 16 anos"
                }
            case "e18":
                return {
                    _src:'https://logodownload.org/wp-content/uploads/2017/07/classificacao-18-anos-logo.png',
                    Texto : "Não recomendado para menores de 18 anos"
                }
            default:
                return {
                    _src:'',
                    Texto:'',
                }
        }

    }

    const result = chose_age(props.age);
    return (
        <Card size='small' style={{backgroundColor:"#363636"}}>
            <Space align='center' direction='horizontal'>
                <Image
                preview={false}
                width={50}
                src={result._src}>
                </Image>
                <Divider  type='vertical' style={{ borderWidth: 2, borderColor: 'white', height: 25 }}/>
                <Text style={{color:"white"}}>{result.Texto}</Text>
            </Space>
        </Card>
    );
  }
  
  export default ClassifcEt;
