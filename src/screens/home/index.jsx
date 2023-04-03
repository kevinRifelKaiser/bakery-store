import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <p>Start buying</p>
      <Button variant="contained">
        <Link to="/categories">Get started</Link>
      </Button>
    </>
  );
};

export default HomePage;
