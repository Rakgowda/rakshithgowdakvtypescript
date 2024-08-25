import React, { Suspense, useState } from "react";
import "./appLayout.css";
import { Flex, Layout, Menu, Spin } from "antd";
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

const menuDetail: MenuDetail = {
  "1": "/",
  "2": "Jobexperiance",
  "3": "project",
};
const { Header, Sider, Content } = Layout;
const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (e: MenuInfo) => {
    navigate(menuDetail[e.key]);
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="side-pannel"
      >
        <div className="logo" />
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
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
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
              <Flex
                style={{ height: "100%" }}
                align="center"
                justify="center"
                gap="middle"
              >
                <Spin tip="Loading" size="large" />
              </Flex>
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
