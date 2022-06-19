import { DeleteOutlined } from "@ant-design/icons";
import { Row, Col, Button, Popconfirm, message } from "antd";
import FilmCardFav from "../FilmCardFav";


const FavoritosBox = props => {
    const confirm = (e) => {
        console.log(e)
        message.success("Removido com sucesso")
    }

    return (
        <>
            <Row gutter={16}>
                <Col>
                    <FilmCardFav Poster={props.Poster} Title={props.Title}/>
                    <Popconfirm title="Deseja Removelo da lista?" okText="Sim" cancelText="Nao" onConfirm={confirm}>
                        <Button type="text" danger><DeleteOutlined /></Button>
                    </Popconfirm>
                </Col>
            </Row>
        </>
    )
}

export default FavoritosBox;
