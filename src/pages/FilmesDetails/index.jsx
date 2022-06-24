import { Typography, Space, Affix, Divider, Row, Col } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Axios from "axios";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import ClassifcEt from "../../components/ClassEt";
import MediaBox from "../../components/MediaBox";
import PosterImg from "../../components/MoviePic";
import ReviewBox from "../../components/ReviewBox";
import { useAuth } from "../../hooks/auth";

const FilmeDetailsPage = (props) => {
  const [favorito, setFavorito] = useState(false);
  const { Text, Title } = Typography;

  const [medias, setMedias] = useState();
  const [logo, setLogo] = useState();

  const params = useParams();
  const { token } = useAuth();
  const { id } = params;

  const isFavorite = async () => {
    const axios = Axios;
    try {
      const response = await axios.get("http://localhost:3333/users/me");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const addFavorite = async () => {
    const axios = Axios;

    try {
      const response = await axios.put(
        "http://localhost:3333/users/me/addvideo",
        { strapiVideoId: Number(id) }
      );

      setFavorito(!favorito);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async () => {
    const axios = Axios;

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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const requestMedia = async () => {
    const axios = Axios;
    const response = await axios.get(
      `http://localhost:1337/api/medias/${id}?populate=*`
    );
    const responselogo = await axios.get(
      `http://localhost:1337/api/medias/${id}?populate=platforms.logo`
    );
    setLogo(responselogo.data.data);
    setMedias(response.data.data);
  };
  useEffect(() => {
    const axios = Axios;

    requestMedia();
    axios.defaults.headers.authorization = `Bearer ${token}`;
    isFavorite();
  }, []);

  let base_url = "http://localhost:1337";
  const getFullUrl = (path) => `${base_url}${path}`;

  let titulo = medias?.attributes?.title;
  let desc = medias?.attributes?.description;
  let posterLink = medias?.attributes?.poster?.data?.map((item) =>
    getFullUrl(item?.attributes?.formats?.medium?.url)
  );
  let trailerLink = medias?.attributes?.link;
  let rate = 9.2; //Tem que fazer os bagulho lá tá ligado? Soma das rating/quantidade de rating <--
  let rateIMDB = 8.0;
  let srcPics = medias?.attributes?.galery?.data?.map((item) =>
    getFullUrl(item?.attributes?.formats?.large?.url)
  );
  let releaseDate = medias?.attributes?.releaseDate;
  let banner = getFullUrl(medias?.attributes?.banner?.data?.attributes?.url);
  let age = medias?.attributes?.minimumAge;
  let plat_data = logo?.attributes?.platforms?.data?.map(
    (item) => item?.attributes
  );

  return (
    <Row justify="center">
      <Col xxl={8} xl={12} lg={12}>
        <Space direction="vertical">
          <PosterImg posterLink={posterLink} />
          <ClassifcEt age={age} />
        </Space>
      </Col>

      <Col xxl={8} xl={12} lg={24}>
        <Title italic level={2}>
          {titulo} - {releaseDate}
        </Title>
        <Text italic style={{ fontSize: 20 }}>
          {desc}
        </Text>
        <Divider style={{ borderWidth: 3 }} />
        <MediaBox src={srcPics} trailerLink={trailerLink} />
      </Col>

      <Col xxl={8} xl={24} lg={12}>
        <a
          onClick={() => {
            favorito ? removeFavorite() : addFavorite();
          }}
        >
          {favorito ? (
            <HeartFilled style={{ fontSize: 25 }} />
          ) : (
            <HeartOutlined style={{ fontSize: 25 }} />
          )}
        </a>
        <ReviewBox
          plat_data={plat_data}
          banner={banner}
          rate={rate}
          rateIMDB={rateIMDB}
        />
      </Col>
    </Row>
  );
};
export default FilmeDetailsPage;
