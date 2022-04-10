import { Image } from 'antd';

const PosterImg = props => {
  return (
    <Image
      width={400}
      src={props.posterLink}
    />
  );
}

export default PosterImg;