import { Layout, Menu } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  LoginOutlined,
  FormOutlined,
  SettingOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import * as S from "./styles";
import { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;

let isSingedIn = false;

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
        collapsedWidth="70"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={onCollapse}
      >
        <NavLink to="/">
          <S.Logo>w2w?</S.Logo>
        </NavLink>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["5"]}>
          {isSingedIn ? (
            <Menu.SubMenu title="Perfil" icon={<UserOutlined />}>
              <Menu.Item key={0} icon={<UserOutlined />}>
                <NavLink to="/profile">Ver meu perfil</NavLink>
              </Menu.Item>
              <Menu.Item key={1} icon={<LogoutOutlined />}>
                <NavLink to="/logout">Sair</NavLink>
              </Menu.Item>
            </Menu.SubMenu>
          ) : (
            <>
              <Menu.Item key={2} icon={<LoginOutlined />}>
                <NavLink to="/login">Entre na sua conta</NavLink>
              </Menu.Item>
              <Menu.Item key={3} icon={showMenu ? <FormOutlined /> : null}>
                <NavLink to="/register">ou cadastre-se</NavLink>
              </Menu.Item>
            </>
          )}
          <S.Separator />
          <Menu.Item key="4" icon={<HomeOutlined />}>
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="5" icon={<SearchOutlined />}>
            <NavLink to="/search">Busca</NavLink>
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
