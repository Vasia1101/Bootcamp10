import React from "react";
import Display from "../component/display/Display";
import CardList from "../component/card/CardList";

const Home = () => {
  return (
    <>
      <Display />
      <CardList />
      <div style={{ marginBottom: 20 }} />
    </>
  );
};

export default Home;
