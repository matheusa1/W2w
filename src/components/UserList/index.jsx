import { DeleteOutlined } from "@ant-design/icons";
import { Row, Col, Button, Popconfirm, message, Empty } from "antd";
import Axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import "./index.css";

const UserList = (props) => {
  const { token } = useAuth();
  const Lista = props.Filmes;
  const requestUser = props.requestUser

  const [listaFilmesStrapi, setListaFilmesStrapi] = useState([]);

  const confirm = async (id) => {
    const axios = Axios;

    try {
      axios.defaults.headers.authorization = `Bearer ${token}`;
      await axios.delete("http://localhost:3333/users/me/removevideo", {
        data: {
          strapiVideoId: Number(id),
        },
      });
      await requestUser();
      message.success("Removido com sucesso");
    } catch (error) {
      console.log(error);
      message.error(`Erro ao remover o filme com id ${id}`);
    }
  };

  const axios = Axios;
  
  const GetList = useCallback(async () => {

    if (Lista) {
      axios.defaults.headers.authorization = null;
      Promise.all(
        Lista.map(async (dado) => {
          // return await axios.get(
          //   `https://w2wbackend.herokuapp.com/api/medias/${dado.strapiId}`
          // );
          return await axios.get(
            `http://localhost:1337/api/medias/${dado.strapiId}`
          );
        }),
      ).then(values => {
        console.log(values);
        const filmes = values.map(response => response.data?.data)
        console.log({filmes});
        setListaFilmesStrapi(filmes);
      })
    }
  },[Lista, axios]);
  useEffect(() => {
    GetList();
  }, [GetList]);

  console.log({listaFilmesStrapi,teste:listaFilmesStrapi?.length});
  if (listaFilmesStrapi?.length === 0) return <Empty description={false}/>;

  return (
    <Row gutter={16}>
      {listaFilmesStrapi?.map((dado) => {
        console.log({dado});
        const posterLink =
        dado?.attributes?.poster?.data[0]?.attributes?.name;
        const title = dado?.attributes?.title;
      return (
        <Col >
                  <NavLink to={`/filme/${dado.id}`}>
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
                    onConfirm={() => confirm(dado?.id)}
                  >
                    <Button type="text" danger>
                      <DeleteOutlined />
                    </Button>
                  </Popconfirm>
                </Col>
      )})}
    </Row>
  );
};

export default UserList;
