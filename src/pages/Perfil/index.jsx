import { Row, Col, Space } from 'antd';
import ButtonEditProf from '../../components/ButtonEditProf';
import ProfilePic from '../../components/ProfilePic';
import TextBox from '../../components/TextBox';

const PerfilPage = () => {
    let Name = 'Gabriel Bueno'
    let Email = 'jdsfij@gmail.com'
    let Telefone = '+55 (11) 87***-**34'
    let Senha = '*******'

    return(
        <Row>
            <Col offset={11}>
                <Space direction='vertical' align='center'>
                    <ProfilePic />
                    <TextBox Name={Name} Email={Email} Telefone={Telefone} Senha={Senha}/>
                    <ButtonEditProf />
                </Space>
            </Col>
        </Row>
    )
    
}

export default PerfilPage