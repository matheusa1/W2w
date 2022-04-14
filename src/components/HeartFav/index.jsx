import { useState } from "react";   
import {HeartFilled} from '@ant-design/icons'; 
import { Typography, Card, Space } from 'antd';
    
const HeartFav = props =>{
    const { Text } = Typography;
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
        <Card size='small'>
                <Space align="center" direction="vertical" size="small" style={{ display: 'flex' }}>
                <HeartFilled 
                    style={{fontSize:50, color:heartCol}}
                    onClick={() => checkFav(heartCol)}
                />
                <Text strong>Curtir</Text>
            </Space>
            </Card>

    )
}
//AAAAAAAAAAAAAa
export default HeartFav;