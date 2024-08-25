import React, { Suspense, useState } from "react";
import "./appLayout.css";
import { Layout, Menu, Spin, Typography } from "antd";
import {
  FormatPainterOutlined,
  FundProjectionScreenOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
import type { MenuInfo } from "rc-menu/lib/interface";
import { MenuDetail } from "./appLayoutType";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const menuDetail: MenuDetail = {
  "1": "/",
  "2": "Jobexperiance",
  "3": "project",
};

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleMenuClick = (e: MenuInfo) => {
    navigate(menuDetail[e.key]);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {isMobile ? (
        <Header className="header-nav">
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            onClick={handleMenuClick}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
              },
              {
                key: "2",
                icon: <FormatPainterOutlined />,
              },
              {
                key: "3",
                icon: <FundProjectionScreenOutlined />,
              },
            ]}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
      ) : (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="side-panel"
        >
          <div className="logo"></div>
          <Menu
            theme="dark"
            mode="inline"
            className="side-menu"
            defaultSelectedKeys={["1"]}
            onClick={handleMenuClick}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "Home",
              },
              {
                key: "2",
                icon: <FormatPainterOutlined />,
                label: "Job Experience",
              },
              {
                key: "3",
                icon: <FundProjectionScreenOutlined />,
                label: "Project",
              },
            ]}
          />
        </Sider>
      )}

      <Layout className="site-layout">
        {!isMobile && (
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className="header-content">
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
              <Title level={3} style={{ color: "white", margin: 0 }}>
                Raksithgowda k v
              </Title>
            </div>
          </Header>
        )}
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Suspense
            fallback={
              <div className="spinner-container">
                <Spin tip="Loading" size="large" />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
