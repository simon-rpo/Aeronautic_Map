import React, { Fragment } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import styled from 'styled-components';
import { Link, Switch, Route } from 'react-router-dom';
import routes from '../routes';

const { Header, Content, Footer } = Layout;

const Title = styled.h1`
  width: 120px;
  height: 31px;
  float: left;
  color: whitesmoke;
  text-align: left;
`;

const Routes = () => (
  <Switch>
    {routes.map((route, index) => (
      // Render more <Route>s with the same paths as
      // above, but different components this time.
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}
    <Route component="" />
  </Switch>
);

const Document = () => {
  return (
    <Fragment>
      <Layout className="layout">
        <Header>
          <div className="Title">
            <Title>Airflight</Title>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}>
            {routes.map(route => (
              <Menu.Item key={route.index}>
                <Link to={route.path}>{route.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', paddingTop: 25 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <div style={{ flex: 1, padding: '10px' }}>
              <Routes />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    </Fragment>
  );
};

export default Document;
