import { Image, Card } from 'antd';

const PosterImg = props => {
  return (
    <Card width={400} size="small" style={{backgroundColor: "#363636"}}>
        <Image
          preview={false}
          width={400}
          src={props.posterLink}
          />
    </Card>
  );
}

export default PosterImg;