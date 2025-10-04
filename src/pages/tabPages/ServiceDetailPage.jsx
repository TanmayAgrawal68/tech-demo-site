import React from "react";
import { useParams } from "react-router-dom";
import { homeData } from "../../../data";
import DetailPage from "./DetailPage";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const pageData = homeData.servicePages[slug];

  return <DetailPage pageData={pageData} />;
};

export default ServiceDetailPage;
