import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsApi } from "../api/products";
import CircularBar from "../components/CircularBar";
import Section from "../components/containers/Section";
import Footer from "../components/Footer";
import Product from "../components/Product";
import { setProducts } from "../redux/productSlice";
import { RootState } from "../redux/store";

const ProductsPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await getProductsApi();
      setLoading(false);
      dispatch(setProducts(res));
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
        {products.products.map((product: any) => (
          <Product product={product} key={product.id} />
        ))}
      </Section>
      <Footer />
    </Box>
  );
};

export default ProductsPage;
