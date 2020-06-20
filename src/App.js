import React from "react";
import { connect } from "react-redux";
import { updateTestVal } from "./redux/actions/testActions";
import "antd/dist/antd.css";
import { Layout, Card } from "antd";
import products from "../src/products";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const App = props => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        {products.map(product => (
          <Card
            key={product.name}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={product.image} />}
          >
            <Meta title={product.name} description="www.instagram.com" />
          </Card>
        ))}
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

const mapStateToProps = state => ({
  testVal: state.testReducer.testVal
});

export default connect(
  mapStateToProps,
  {
    updateTestVal
  }
)(App);
