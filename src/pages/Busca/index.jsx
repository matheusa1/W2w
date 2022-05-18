import {Row, Col, Input, Image, Card, Divider} from 'antd'
import { NavLink } from 'react-router-dom';

const { Search } =  Input;
const onSearch = value => console.log(value);
const { Meta } = Card;

const SearchPage = props => {
    return(    
    <>
    <Row gutter={[4, 32]}>
        <Col span = {8} offset = {8}>
            <Search placeholder="O que esta querendo assistir?" onSearch={onSearch} enterButton />
        </Col>
    </Row>
    <Divider />
    <Row gutter={[4, 32]}>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 250
                     }}
                    cover={<img alt="example" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mzezdUZEnpiUIlxpdyLO1R08Lqm.jpg" />}
                >
                <Meta title="Eternos" description="Filme" />

                </Card>
            </NavLink>
        </Col>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 250
                     }}
                    cover={<img alt="example" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h5UzYZquMwO9FVn15R2eK2itmHu.jpg" />}
                >
                <Meta title="Venom: Tempo de Carnificina" description="Filme" />

                </Card>
            </NavLink>
        </Col>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 250
                     }}
                    cover={<img alt="example" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/soD18uucENplI81kUErvMzdb5Lm.jpg" />}
                >
                <Meta title="Uncharted: Fora do Mapa" description="Filme" />

                </Card>
            </NavLink>
        </Col>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 250
                     }}
                    cover={<img alt="example" src="https://br.web.img2.acsta.net/pictures/22/04/25/22/03/1012776.jpg" />}
                >
                <Meta title="Barry" description="Série" />

                </Card>
            </NavLink>
        </Col>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 250
                     }}
                    cover={<img alt="example" src="https://br.web.img2.acsta.net/pictures/20/04/28/21/42/3561171.jpg" />}
                >
                <Meta title="Barry" description="Filme" />

                </Card>
            </NavLink>
        </Col>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 250
                     }}
                    cover={<img alt="example" src="https://img.elo7.com.br/product/zoom/2C15759/big-poster-anime-black-clover-lo001-tamanho-90x60-cm-presente-nerd.jpg" />}
                >
                <Meta title="Black Clover" description="Anime" />

                </Card>
            </NavLink>
        </Col>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 250
                     }}
                    cover={<img alt="example" src="https://ovicio.com.br/wp-content/uploads/2019/03/20190318-jojo.jpg"/>}
                >
                <Meta title="Jojo's Bizarre Adventures: Vento Aureo" description="Anime" />

                </Card>
            </NavLink>
        </Col>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 250
                     }}
                    cover={<img alt="example" src="https://m.media-amazon.com/images/I/71jqKaWob3L._AC_SL1500_.jpg" />}
                >
                <Meta title="Zack Snyder's Justice League" description="Filme" />

                </Card>
            </NavLink>
        </Col>
    </Row>
    </>
    )
}

export default SearchPage;