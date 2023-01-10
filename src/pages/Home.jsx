import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Link to="/post">글쓰러가기 </Link>
      <Link to="/board">다른 유저 글보러가기 </Link>
    </Layout>
  );
};

export default Home;
