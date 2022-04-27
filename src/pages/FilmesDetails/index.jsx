import { Typography, Space, Affix, Divider, Button } from "antd";
import  Axios  from "axios";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import ClassifcEt from "../../components/ClassEt";
import MediaBox from "../../components/MediaBox";
import PosterImg from "../../components/MoviePic";
import ReviewBox from "../../components/ReviewBox";



const FilmeDetailsPage = props => {
  const { Text, Title } = Typography;
  
  const [medias, setMedias] = useState();
  
  const params = useParams();
  const { id } = params;

  const requestMedia = async () => {
    const axios = Axios;
    const response = await axios.get(`http://localhost:1337/api/medias/${id}`)
    setMedias(response.data.data);
    console.log(response.data);
  }
  useEffect(() => {
    requestMedia();
  }, []);
  
  let titulo = medias?.attributes.title;
  let desc = medias?.attributes.description;
  let posterLink = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uq2u8HgtLFJkjNq2kHb2jvipIPT.jpg"
  let trailerLink = medias?.attributes.link;
  let rate = 9.2; //Tem que fazer os bagulho lá tá ligado? Soma das rating/quantidade de rating <--
  let rateIMDB = 8.0;
  let srcPics = ["https://www.themoviedb.org/t/p/original/4qpYhfkhWR1lFFtxjmmG9SrPDUs.jpg", "https://www.themoviedb.org/t/p/original/mND3PTdl7B6YKSLjuMTsCGXafcB.jpg", "https://www.themoviedb.org/t/p/original/fdMZRDhjQDwkNjpKrFN87D9NA8i.jpg"];
  let releaseDate = medias?.attributes.releaseDate;

  return (
    <Space align="start">
            <Space align="start" direction="horizontal" size="small" style={{ display: 'flex' }}>
              <Affix offsetTop={-100}>
                <Space direction="vertical" size={"middle"}>
                  <PosterImg posterLink={posterLink} />
                  <ClassifcEt />
                </Space>
              </Affix>
              <Space align="Start" direction="vertical" size="small" style={{ display: 'flex' }}>
                <Title italic level={2}>{titulo} - {releaseDate}</Title>
                <Text italic style={{fontSize: 20}}>{desc}</Text>
                <Divider style={{ borderWidth: 3 }}/> 
                <Space align="start" style={{ display: 'flex' }}>
                  <MediaBox src={srcPics} trailerLink={trailerLink}/>
                </Space>
              </Space>
              <ReviewBox rate={rate} rateIMDB={rateIMDB}/>
            </Space>
    </Space>
  )
}
export default FilmeDetailsPage