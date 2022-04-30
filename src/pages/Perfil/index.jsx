import { Row, Col, Space } from 'antd';
import ButtonEditProf from '../../components/ButtonEditProf';
import ProfilePic from '../../components/ProfilePic';
import TextBox from '../../components/TextBox';
import { UserOutlined } from '@ant-design/icons';

const PerfilPage = () => {
    let Name = 'Andreias Pereira'
    let Email = 'jdsfij@gmail.com'
    let Telefone = '+55 (11) 87***-**34'
    let Senha = '*******'
    let UserPic = 'data:image/jpeg;base64,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'

    return(
        <Row justify="center">
            <Col>
                <Space direction='vertical' align='center'>
                    <ProfilePic Pic={UserPic}/>
                    <TextBox Name={Name} Email={Email} Telefone={Telefone} Senha={Senha}/>
                    <ButtonEditProf />
                </Space>
            </Col>
        </Row>
    )
    
}

export default PerfilPage