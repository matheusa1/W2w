import { Carousel, Image, Space } from 'antd';

const MovieImages = props => {

    return(
        <Space style={{height:400, width:800}}>
        <Carousel autoplay dotPosition={'left'}>
            <div>
                <Image
                width={800}
                src={props.src[0]}
                >
                </Image>
            </div>
            <div>
                <Image
                width={800}
                src={props.src[1]}
                >
                </Image>
            </div>
            <div>
                <Image
                width={800}
                src={props.src[2]}
                >
                </Image>
            </div>

        </Carousel>
        </Space>
    )
}

export default MovieImages;