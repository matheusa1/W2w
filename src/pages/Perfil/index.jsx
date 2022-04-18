import { Avatar } from 'antd';
import { EditOutlined, UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

const PerfilPage = () => {
    let Name = 'Gabriel Bueno'
    let Email = 'jdsfij@gmail.com'
    let Telefone = '+55 (11) 87***-**34'
    let Senha = '*******'

    return(
        <div>
            <Row>
                <Col span={11}/>
                <Col span={11}>
                    <Avatar 
                        size={102} 
                        icon={<UserOutlined/>}
                    />
                    <EditOutlined/>
                    <p>{Name} <EditOutlined/> </p>
                    <p>conta:</p>
                    <p>email</p>
                    <p>{Email} <EditOutlined/> </p>
                    <p>telefone</p>
                    <p>{Telefone} <EditOutlined/> </p>
                    <p>senha</p>
                    <p>{Senha} <EditOutlined/> </p>
                </Col>
                <Col span={11}/>
            </Row>
        </div>
    )
    
}

export default PerfilPage