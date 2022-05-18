import { EyeOutlined } from "@ant-design/icons";
import { Statistic } from "antd";


const TotalWatched = props => {


    return (
        <Statistic title="Assistidos" value={props.Watched} prefix={<EyeOutlined/>}/>
    )
}

export default TotalWatched;