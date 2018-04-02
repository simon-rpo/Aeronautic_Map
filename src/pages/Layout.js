import React, { Fragment } from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
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
  </Switch>
);

const Document = () => {
  return (
    <Fragment>
      <Layout>
        <Header>
          <div className="Title">
            <Title>Airflight</Title>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            forceSubMenuRender
            style={{ lineHeight: '64px' }}>
            {routes.map(route => (
              <Menu.Item key={route.index}>
                <Link to={route.path}>{route.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content style={{ padding: '0 25px', paddingTop: 10 }}>
          <div
            style={{
              background: '#fff',
              paddingTop: '5px',
              minHeight: 'calc(100vh - 8px)',
            }}>
            <div style={{ flex: 1, padding: '10px' }}>
              <Routes />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Airflight ©2018 Created by Simon
          <span role="img" aria-label="Smile">
            🙂
          </span>
        </Footer>
      </Layout>
    </Fragment>
  );
};

export default withRouter(Document);
