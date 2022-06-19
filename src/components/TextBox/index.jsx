import { PushpinFilled } from '@ant-design/icons';
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
                        <ProfilePic Pic={props.Pic}/>
                    </Col>
                    <Col>
                        <Text style={{fontSize: FontSizeTitle, fontWeight: 'bolder'}}>{props.Name}</Text>
                        <ButtonEditProf/>
                    </Col>
                </Row>
                <br/>
                <Text style={{fontSize: FontSize}}>{props.Bio}</Text>
                <br/>
                <Text style={{fontSize: FontSize}}><PushpinFilled/>{props.From}</Text>
            </Col>
        </Row>
    )
}

export default TextBox