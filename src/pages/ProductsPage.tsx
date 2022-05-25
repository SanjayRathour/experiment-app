import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductsApi } from "../api/products";
import CircularBar from "../components/CircularBar";
import Section from "../components/containers/Section";
import Footer from "../components/Footer";
import Product from "../components/Product";
import { resetMoney } from "../redux/moneySlice";
import { resetProducts, setProducts } from "../redux/productSlice";
import { RootState } from "../redux/store";

const ProductsPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [cookies] = useCookies();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const answers = useSelector((state: RootState) => state.answers);
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
    dispatch(resetProducts());
    dispatch(resetMoney());
    if (cookies.experiment === "true") {
      navigate("/thank");
    } else {
      if (Object.keys(answers).length === 0) {
        navigate("/");
      }
      getProducts();
    }
    return () => {
      dispatch(resetProducts());
      dispatch(resetMoney());
    };
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
