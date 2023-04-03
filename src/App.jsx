import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { HomePage, Categories, Cart, NotFound } from "./screens/index";
import { NavBar } from "./components";

const App = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
