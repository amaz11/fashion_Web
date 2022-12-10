import React from "react";
import Footer from "../../components/Footer";
import Nabvar from "../../components/Nabvar";
import Singleproduct from "../../components/Singleproduct";

const Product = () => {
  return (
    <div>
      <Nabvar />
      <div className="mt-32 sm:mt-24 "></div>
      <Singleproduct />
      <Footer />
    </div>
  );
};

export default Product;
