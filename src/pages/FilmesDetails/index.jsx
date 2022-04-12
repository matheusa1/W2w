import { Typography, Space } from "antd";
import { useParams } from "react-router";
import PosterImg from "../../components/MoviePic";
import ReviewBox from "../../components/ReviewBox";

const FilmeDetailsPage = props => {
  const { Text, Title } = Typography;
  
  const params = useParams();
  console.log(params);
  const { id } = params;

  let titulo = "Magnólia";
  let desc = "Um dia em San Fernando Valley, na Califórnia, nos arredores da rua Magnólia, as vidas de nove personagens são interligadas através de um programa de televisão onde um grupo de três crianças desafia três adultos, cujas histórias se cruzam por coincidências do destino.";
  let posterLink = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uq2u8HgtLFJkjNq2kHb2jvipIPT.jpg"

  return (
    <div>
            <Space align="start" direction="horizontal" size="small" style={{ display: 'flex' }}>
              <PosterImg posterLink={posterLink} />
              <Space align="Start" direction="vertical" size="small" style={{ display: 'flex' }}>
                <Title level={2}>{titulo}</Title>
                <Text italic>{desc}</Text>
              </Space>
              <ReviewBox />
            </Space>
    </div>
  )
}
export default FilmeDetailsPage