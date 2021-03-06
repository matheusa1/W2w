import { Typography, Space, Divider, Row, Col } from "antd";
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
    axios.defaults.headers.authorization = `Bearer ${token}`;

    try {
      const response = await axios.get("http://localhost:3333/users/me");
      response?.data?.myList.forEach((data) => {
        if (data.strapiId === Number(id)) {
          setFavorito(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const requestMedia = async () => {
    const axios = Axios;
    axios.defaults.headers.authorization = null;
    const response = await axios.get(
      `https://w2wbackend.herokuapp.com/api/medias/${id}?populate=*`
    );
    const responselogo = await axios.get(
      `https://w2wbackend.herokuapp.com/api/medias/${id}?populate=platforms.logo`
    );
    setLogo(responselogo.data.data);
    setMedias(response.data.data);
  };

  useEffect(() => {
    isFavorite();
    requestMedia();
  }, []);

  let base_url = "https://w2wbackend.herokuapp.com";
  const getFullUrl = (path) => `${base_url}${path}`;
  
  let titulo = medias?.attributes?.title;
  let desc = medias?.attributes?.description;
  let posterLink = medias?.attributes?.poster?.data?.map((item) =>
    getFullUrl(item?.attributes?.formats?.medium?.url)
  );
  let trailerLink = medias?.attributes?.link;
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
        <ReviewBox
          plat_data={plat_data}
          banner={banner}
        />
      </Col>
    </Row>
  );
};
export default FilmeDetailsPage;
