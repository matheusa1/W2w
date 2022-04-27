import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, SearchOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import * as S from './styles'
import { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;

const Applayout = ({children}) => {
  const [showMenu,setShowMenu] = useState(true);

  const onCollapse = collapsed => {
    setShowMenu(s=> !s);
  };
  
  return(
  

  <Layout style={{minHeight:'100vh', backgroundColor:'#FFF'}}>
    <Sider
      collapsible 
      collapsed={showMenu} 
      // breakpoint="lg"
      // collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={onCollapse}
      >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <NavLink to="/">home</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        <NavLink to="/login">Login</NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
        <NavLink to="/register">cadastro</NavLink>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
        <NavLink to="/filme/01">filme 01</NavLink>
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
        <NavLink to="/filme/02">filme 02</NavLink>
        </Menu.Item>
        <Menu.Item key="6" icon={<SearchOutlined />}>
        <NavLink to="/search">busca</NavLink>
        </Menu.Item>
        <Menu.Item key="7">
        <NavLink to="/category">Categoria</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0, height: "30px" }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <S.LayoutFixHeight>
          {children}
          </S.LayoutFixHeight>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  </Layout>
)}

export default Applayout;
  