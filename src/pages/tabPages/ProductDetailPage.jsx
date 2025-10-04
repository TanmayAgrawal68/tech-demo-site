import React from "react";
import { useParams } from "react-router-dom";
import { homeData } from "../../../data";
import DetailPage from "./DetailPage";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const pageData = homeData.productPages[slug];

  return <DetailPage pageData={pageData} />;
};

export default ProductDetailPage;
