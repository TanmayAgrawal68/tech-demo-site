import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import TabPageLayout from "./layout/TabPageLayout";
import Home from "./pages/home";
import { ProductDetailPage, ServiceDetailPage } from "./pages/tabPages";
import ScrollToTop from "./components/ScrollToTop";
import CaseStudies from "./pages/casePages";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/products/:slug"
          element={
            <TabPageLayout>
              <ProductDetailPage />
            </TabPageLayout>
          }
        />
        <Route
          path="/services/:slug"
          element={
            <TabPageLayout>
              <ServiceDetailPage />
            </TabPageLayout>
          }
        />
        <Route path="/case/:slug" element={<CaseStudies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
