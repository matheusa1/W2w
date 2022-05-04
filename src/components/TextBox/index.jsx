import { Typography, Col, Row } from 'antd';
import ButtonEditProf from '../ButtonEditProf';
import ProfilePic from '../ProfilePic';

const TextBox = props => {
    const Text = Typography;
    let FontSizeTitle = 30;
    let FontSize = 14;

    return (
        <Row>
            <Col >
                <Row gutter={16} align="middle">
                    <Col>
                        <ProfilePic />
                    </Col>
                    <Col>
                        <Text style={{fontSize: FontSizeTitle}}>{props.Name}</Text>
                        <ButtonEditProf/>
                    </Col>
                </Row>
                <Text style={{fontSize: FontSize}}>{props.Bio}</Text>
            </Col>
        </Row>
    )
}

export default TextBox