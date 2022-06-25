import { DeleteOutlined } from "@ant-design/icons";
import { Row, Col, Button, Popconfirm, message, Empty } from "antd";
import Axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const UserList = (props) => {
  const Lista = props.Filmes;

  const [listaFilmesStrapi, setListaFilmesStrapi] = useState([]);

  const confirm = async (id) => {
    const axios = Axios;

    try {
      await axios.delete("http://localhost:3333/users/me/removevideo", {
        data: {
          strapiVideoId: Number(id),
        },
      });
    } catch (error) {
      console.log(error);
    }
    message.success("Removido com sucesso");
  };

  console.log(Lista);

  const axios = Axios;

  if (Lista) {
    Lista.forEach(async (dado) => {
      const response = await axios.get(
        `http://localhost:1337/api/medias/${dado.strapiId}`
      );
      setListaFilmesStrapi((state) => [...state, response.data]);
    });
  }

  return (
    <>
      {Lista ? (
        Lista.lenght > 1 ? (
          listaFilmesStrapi.map(async (dado) => {
            const posterLink =
              dado?.attributes?.poster?.data[0]?.attributes?.name;
            const title = dado?.attributes?.title;
            return (
              <Row gutter={16}>
                <Col>
                  <NavLink to="/filme/15">
                    <div className="image">
                      <img
                        class="image__img"
                        style={{ width: 150, height: 220 }}
                        alt={`poster ${title}`}
                        src={posterLink}
                      />
                      <div className="image__overlay">
                        <div className="image__title">{title}</div>
                      </div>
                    </div>
                  </NavLink>
                  <Popconfirm
                    title="Deseja removê-lo da lista?"
                    okText="Sim"
                    cancelText="Nao"
                    onConfirm={confirm(dado?.id)}
                  >
                    <Button type="text" danger>
                      <DeleteOutlined />
                    </Button>
                  </Popconfirm>
                </Col>
              </Row>
            );
          })
        ) : (
          <Empty description={false} />
        )
      ) : (
        <Empty description={false} />
      )}
    </>
  );
};

export default UserList;
