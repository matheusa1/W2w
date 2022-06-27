import { Popover, Space } from "antd";
import { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Axios from "axios";

const FilmCardFav = (props) => {
  const [favorito, setFavorito] = useState(false);

  const addFavorite = async () => {
    const axios = Axios;
    try {
      const response = await axios.delete(
        "http://localhost:3333/users/me/removevideo",
        { strapiVideoId: 2 }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Space direction="vertical">
      <Popover trigger="hover" content={props.Title}>
        <a
          onClick={() => {
            addFavorite();
          }}
        >
          {favorito ? (
            <HeartFilled style={{ fontSize: 25 }} />
          ) : (
            <HeartOutlined style={{ fontSize: 25 }} />
          )}
        </a>
        <img style={{ width: 150, height: 220 }} alt="" src={props.Poster} />
      </Popover>
    </Space>
  );
};

export default FilmCardFav;
