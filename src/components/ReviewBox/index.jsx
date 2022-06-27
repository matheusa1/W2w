import { Row, Card, Space, Image } from "antd"
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import W2w from "../W2w"
import Axios from "axios";
import { useParams } from "react-router";
import React, { useState } from "react";
import { useAuth } from "../../hooks/auth";


const ReviewBox = props => {
    const [favorito, setFavorito] = useState(false);
  
    const params = useParams();
    const { token } = useAuth();
    const { id } = params;

    const addFavorite = async () => {
        const axios = Axios;
        axios.defaults.headers.authorization = await `Bearer ${token}`;
    
        try {
          const response = await axios.put(
            "http://localhost:3333/users/me/addvideo",
            { strapiVideoId: Number(id) }
          );
    
          setFavorito(!favorito);
        } catch (error) {
          console.log(error);
        }
      };

      const removeFavorite = async () => {
        const axios = Axios;
        axios.defaults.headers.authorization = await `Bearer ${token}`;
    
        try {
          const response = await axios.delete(
            "http://localhost:3333/users/me/removevideo",
            {
              data: {
                strapiVideoId: Number(id),
              },
            }
          );
    
          setFavorito(!favorito);
        } catch (error) {
          console.log(error);
        }
      };

    return (
    <Row justify="end">
        <Card style={{width: 400, backgroundColor: '#363636'}}
        cover={
            <Image
            alt='Banner'
            height={200}
            src={props.banner}
            />
        }
        >
            <Row justify="center">
                <Space direction="vertical" align="center">
                        <a
                        onClick={() => {
                            favorito ? removeFavorite() : addFavorite();
                        }}
                        >
                        {favorito ? (
                            <HeartFilled style={{ fontSize: 100 }} />
                        ) : (
                            <HeartOutlined style={{ fontSize: 100 }} />
                        )}
                        </a>
                        <W2w plat_data={props.plat_data} />
                </Space>
                </Row>
        </Card>
        </Row>
    )
}

export default ReviewBox;