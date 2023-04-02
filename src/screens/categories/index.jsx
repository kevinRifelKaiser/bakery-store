import { CategoryCard } from "../../components/index";
import { Box, Grid } from "@mui/material";
import { CATEGORIES } from "../../constants/data/index";

const Categories = () => {
  return (
    <>
      <h1>Categories</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {CATEGORIES.map((element) => (
            <Grid key={element.id} item xs={12} md={8} lg={6} xl={3}>
              <CategoryCard imgURL={element.imgURL} title={element.title} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Categories;
