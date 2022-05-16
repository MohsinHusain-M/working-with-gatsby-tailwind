import React from "react";
import Layout from "../components/Layout";
import AllRecipe from "../components/AllRecipe";
const product = ({ recipes } = []) => {
  return (
    <Layout>
      <AllRecipe />
    </Layout>
  );
};

export default product;
