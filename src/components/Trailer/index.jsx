import { Image } from 'antd';
import { PlayCircleFilled } from '@ant-design/icons';

const Trailer = props => {

    return (
        <a href={props.trailerLink} target="_blank" >
            <Image
            align="center"
            preview={false}
            width={800}
            src="https://www.themoviedb.org/t/p/original/iGdAD102L903yrn9T6wdQ8seXLN.jpg"
            >
            </Image>
        </a>
    );
  }
  
  export default Trailer;