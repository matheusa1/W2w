import { Layout, Menu, Avatar } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import * as S from "./styles";
import { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;

const Applayout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(true);

  const onCollapse = (collapsed) => {
    setShowMenu((s) => !s);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={showMenu}
        breakpoint="lg"
        collapsedWidth="50"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={onCollapse}
      >
        <div className="logo" />
        <Menu style={{paddingTop: "25px", textAlign: "center"}} theme="dark" mode="vertical" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            <Avatar
              style={{
                backgroundColor: "#5242cb",
                marginRight: "10px",
                marginLeft: "-10px",
              }}
              icon={<UserOutlined />}
            />
            <NavLink to="/profile">Perfil</NavLink>
          </Menu.Item>
          <S.Separator />
          <Menu.Item key="2" icon={<HomeOutlined />}>
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<AppstoreOutlined />}>
            <NavLink to="/category">Categoria</NavLink>
          </Menu.Item>
          <Menu.Item key="4" icon={<SearchOutlined />}>
            <NavLink to="/search">Busca</NavLink>
          </Menu.Item>
          <Menu.Item key="5" icon={<SettingOutlined />}>
            <NavLink to="/settings">Configurações</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <S.LayoutFixHeight>{children}</S.LayoutFixHeight>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  );
};

export default Applayout;
