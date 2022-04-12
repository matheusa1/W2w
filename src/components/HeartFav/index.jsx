import { useState } from "react";   
import {HeartFilled} from '@ant-design/icons'; 
import { Col, Row, Popover, Card, Space } from 'antd';
    
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
        <Space align="center" direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Card size='small'>
                <Popover content={text}>
                    <HeartFilled 
                        style={{fontSize:50, color:heartCol}}
                        onClick={() => checkFav(heartCol)}
                        />
                </Popover> 
            </Card>

        </Space>
    )
}
//AAAAAAAAAAAAAa
export default HeartFav;