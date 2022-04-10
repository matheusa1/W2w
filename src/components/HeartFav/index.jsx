import { useState } from "react";   
import {HeartFilled} from '@ant-design/icons'; 
import { Col, Row, Popover, Card } from 'antd';
    
const HeartFav = props =>{
    const [heartCol,setColor] = useState("#243827")
    let is_fav = false;

    function checkFav(color) {
        if (color === "#243827"){
            setColor("#3bd465")
            is_fav = true;
        }
        else{
            setColor("#243827")
            is_fav = false;
        }
    }

    const text = (
        <div>
          <p>Favoritar filme</p>
        </div>
    );
    
    return (
        <Row>
            <Col span={8}></Col>
            <Col span={8}>
                <Card style={{ width: 80, height: 80}}>
                    <Row justify="center">
                        <Popover content={text}>
                            <HeartFilled 
                            style={{fontSize:50, color:heartCol}}
                            onClick={() => checkFav(heartCol)}
                            />
                        </Popover>              
                    </Row>
                </Card>
            </Col>
            <Col span={8}></Col>
        </Row>
    )
}

export default HeartFav;