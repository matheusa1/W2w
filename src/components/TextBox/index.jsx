import { Typography, Space, Card } from 'antd';

const TextBox = props => {
    const Text = Typography;
    let FontSize = 20;

    return (
        <Card>
            <Space direction='vertical' align='center'>
                <Text style={{fontSize: FontSize}}>Nome: {props.Name}</Text>
                <Text style={{fontSize: FontSize}}>Email: {props.Email}</Text>
                <Text style={{fontSize: FontSize}}>Telefone: {props.Telefone}</Text>
                <Text style={{fontSize: FontSize}}>Senha: {props.Senha}</Text>
            </Space>
        </Card>
    )
}

export default TextBox