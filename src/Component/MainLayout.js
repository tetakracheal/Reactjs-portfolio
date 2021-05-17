import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import portfo from '../Asset/portfo.jpeg'; 
import {GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  InstagramOutlined ,
  HomeOutlined,
  UserOutlined,
  FileOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;
const MainLayout=({children}) =>{
 const [collapsed,setCollapsed]= useState(false)
  const toggle = () => {
 setCollapsed(!collapsed)
  };
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{minHeight:"100vh" }}>
          <img src={portfo}alt="logo" className="logo" />
        
          <h1 className="name"> Teta Racheal</h1> 
          <div > <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            <GithubOutlined className="social-icon" />
            <LinkedinOutlined className="social-icon"/>
            <TwitterOutlined className="social-icon" />
            <InstagramOutlined className="social-icon" />

            </Menu>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined className="menu-icon" />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined className="menu-icon"/>}>
              About
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined className="menu-icon" />}>
              Resume
            </Menu.Item>
            <Menu.Item key="4" icon={<FileOutlined className="menu-icon" />}>
              portfolio
            </Menu.Item>
            <Menu.Item key="5" icon={<FileOutlined className="menu-icon" />}>
              Service
            </Menu.Item>
          </Menu>
          <p className="copyright"> © Copyright <span> SheCanCode </span></p>
          <p className="design">Designed by <span> Teta </span></p>
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header> */}
          <Content
            className="site-layout-background"
            style={{
              margin: '0px 3px',
              padding: 0,
              minHeight: "100vh",
            }}
          >
           { children}
          </Content>
        </Layout>
      </Layout>
    );
}
export default MainLayout;