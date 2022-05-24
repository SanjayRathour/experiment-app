import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getProductsApi } from "../api/products";
import CircularBar from "../components/CircularBar";
import Section from "../components/containers/Section";
import Footer from "../components/Footer";
import Product from "../components/Product";

const ProductsPage = () => {
  const [products, setProducts] = useState<any>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await getProductsApi();
      setLoading(false);
      console.log(res);
      setProducts(res);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Box sx={{ backgroundColor: "#DFDFDF", minHeight: "100vh" }}>
      <Section>
        {loading && <CircularBar />}
        {products &&
          products.products.map((product: any) => {
            return <Product product={product} key={product.id} />;
          })}
      </Section>
      <Footer />
    </Box>
  );
};

export default ProductsPage;
