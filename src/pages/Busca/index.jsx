import {Row, Col, Input, Image, Card} from 'antd'
import { NavLink } from 'react-router-dom';

const { Search } =  Input;
const onSearch = value => console.log(value);
const { Meta } = Card;

const SearchPage = props => {
    return(    
    <>
    <h1>searchPage</h1>
    <Row gutter={[4, 32]}>
        <Col span = {8} offset = {8}>
            <Search placeholder="O que esta querendo assistir?" onSearch={onSearch} enterButton />
        </Col>
    </Row>
    <Row>
        
    </Row>
    <Row gutter={[4, 32]}>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={<img alt="example" src="" />}
                >
                <Meta title="Nome" description="Categoria" />

                </Card>
            </NavLink>
        </Col>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={<img alt="example" src="" />}
                >
                <Meta title="Nome" description="Categoria" />

                </Card>
            </NavLink>
        </Col>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={<img alt="example" src="" />}
                >
                <Meta title="Nome" description="Categoria" />

                </Card>
            </NavLink>
        </Col>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={<img alt="example" src="" />}
                >
                <Meta title="Nome" description="Categoria" />

                </Card>
            </NavLink>
        </Col>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={<img alt="example" src="" />}
                >
                <Meta title="Nome" description="Categoria" />

                </Card>
            </NavLink>
        </Col>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={<img alt="example" src="" />}
                >
                <Meta title="Nome" description="Categoria" />

                </Card>
            </NavLink>
        </Col>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={<img alt="example" src="" />}
                >
                <Meta title="Nome" description="Categoria" />

                </Card>
            </NavLink>
        </Col>
        <Col offset={1}>
            <NavLink to="url">
                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={<img alt="example" src="" />}
                >
                <Meta title="Nome" description="Categoria" />

                </Card>
            </NavLink>
        </Col>
    </Row>
    </>
    )
}

export default SearchPage;