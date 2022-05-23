import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import QuestionsPage from "./pages/QuestionsPage";
import BuyingDescriptionPage from "./pages/BuyingDescriptionPage";
import ProductsPage from "./pages/ProductsPage";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/bd" element={<BuyingDescriptionPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/thank" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
