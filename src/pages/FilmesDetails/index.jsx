import { Typography, Space, Affix, Divider, Button } from "antd";
import  Axios  from "axios";
import { useParams } from "react-router";
import ClassifcEt from "../../components/ClassEt";
import MediaBox from "../../components/MediaBox";
import PosterImg from "../../components/MoviePic";
import ReviewBox from "../../components/ReviewBox";

const FilmeDetailsPage = props => {
  const { Text, Title } = Typography;
  
  const params = useParams();
  const { id } = params;
  const requestMedia = async () => {
    const axios = Axios;
    const response = await axios.get(`http://localhost:1337/api/medias/${id}`)
    console.log(response.data);
  }

  let titulo = "Magnólia";
  let desc = "Um dia em San Fernando Valley, na Califórnia, nos arredores da rua Magnólia, as vidas de nove personagens são interligadas através de um programa de televisão onde um grupo de três crianças desafia três adultos, cujas histórias se cruzam por coincidências do destino.";
  let posterLink = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uq2u8HgtLFJkjNq2kHb2jvipIPT.jpg"
  let trailerLink = "https://www.youtube.com/watch?v=KnamcFv_N9Q"
  let rate = 9.2;
  let rateIMDB = 8.0;

  let srcPics = ["https://www.themoviedb.org/t/p/original/4qpYhfkhWR1lFFtxjmmG9SrPDUs.jpg", "https://www.themoviedb.org/t/p/original/mND3PTdl7B6YKSLjuMTsCGXafcB.jpg", "https://www.themoviedb.org/t/p/original/fdMZRDhjQDwkNjpKrFN87D9NA8i.jpg"];

  return (
    <Space align="start">
            <Space align="start" direction="horizontal" size="small" style={{ display: 'flex' }}>
              <Affix offsetTop={20}>
                <PosterImg posterLink={posterLink} />
                <Button
                onClick={() => requestMedia()}
                >TESTE</Button>
                <ClassifcEt />
              </Affix>
              <Space align="Start" direction="vertical" size="small" style={{ display: 'flex' }}>
                <Title level={2}>{titulo}</Title>
                <Text italic>{desc}</Text>
                <Divider /> 
                <Space align="center" direction="vertical" style={{ display: 'flex' }}>
                  <MediaBox src={srcPics} trailerLink={trailerLink}/>
                </Space>
              </Space>
              <ReviewBox rate={rate} rateIMDB={rateIMDB}/>
            </Space>
    </Space>
  )
}
export default FilmeDetailsPage