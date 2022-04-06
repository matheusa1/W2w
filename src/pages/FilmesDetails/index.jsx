import { Rate } from "antd";
import { useParams } from "react-router";
import PosterImg from "../../components/MoviePic";
import Rating from "../../components/Rating";

const FilmeDetailsPage = props =>{
  const params = useParams();
  console.log(params);
  const {id} = params;

  let titulo = "Magnólia";
  let desc = "Um dia em San Fernando Valley, na Califórnia, nos arredores da rua Magnólia, as vidas de nove personagens são interligadas através de um programa de televisão onde um grupo de três crianças desafia três adultos, cujas histórias se cruzam por coincidências do destino.";
  let posterLink = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uq2u8HgtLFJkjNq2kHb2jvipIPT.jpg"

  return (
    <div>
      <h2>{titulo}</h2>
      <PosterImg posterLink={posterLink} />
      <Rating />
      <p>{desc}</p>
    </div>
  )
}

export default FilmeDetailsPage