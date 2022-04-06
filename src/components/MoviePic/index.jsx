import { Image } from 'antd';

const PosterImg = props => {
  return (
    <Image
      width={200}
      src={props.posterLink}
    />
  );
}

export default PosterImg;