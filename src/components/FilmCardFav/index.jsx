import { Popover, Space } from "antd"

const FilmCardFav = props => {


    return (
        <Space direction="vertical">
            <Popover trigger="hover" content={props.Title}>
                <img style={{width: 150, height: 220}} alt="" src={props.Poster}/>
            </Popover>
        </Space>
    )
}

export default FilmCardFav;