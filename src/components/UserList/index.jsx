import { DeleteOutlined } from "@ant-design/icons";
import { Row, Col, Button, Popconfirm, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import './index.css'

const UserList = props => {

  const [filmesStrapi,setFilmesStrapi] = useState([])

  const confirm = (e) => {
      console.log(e)
      message.success("Removido com sucesso")
    }

  return (
    <>
      {filmes.map(filme =>{
        const response = await axios.get(`strapiapi/filme/${filme.id}`)
        setFilmesStrapi(state => [...state,response.data.filme])
        return(
            <Row gutter={16}>
              <Col>
              <NavLink>
                  <div className="image">
                  <img class="image__img" style={{width: 150, height: 220}} alt="" src={props.Poster}/>
                    <div className="image__overlay">
                      <div className="image__title">{props.Title}</div>
                    </div>
                  </div>
              </NavLink>
                <Popconfirm title="Deseja removê-lo da lista?" okText="Sim" cancelText="Nao" onConfirm={confirm}>
                  <Button type="text" danger><DeleteOutlined /></Button>
                </Popconfirm>
                </Col>
              </Row>
          );
        })}
    </>
  )
}

export default UserList;
