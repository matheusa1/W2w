import { Image, Row } from 'antd';

const PosterImg = props => {
  return (
      <Image
        preview={false}
        width={400}
        src={props.posterLink}
        />
  );
}

export default PosterImg;