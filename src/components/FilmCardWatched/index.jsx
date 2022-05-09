import { Popover, Rate, Space } from "antd"

const FilmCardWatched = props => {


    return (
        <Space direction="vertical">
            <Popover trigger="hover" content={props.Title}>
                <img style={{width: 150, height: 220}} alt="" src={props.Poster}/>
            </Popover>
            <Rate disabled style={{ fontSize: 15 }} defaultValue={props.Rate} allowHalf/>
        </Space>
    )
}

export default FilmCardWatched;