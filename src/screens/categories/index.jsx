import { Box, Grid } from "@mui/material";
import { CategoryCard } from "../../components/index";
import { CATEGORIES } from "../../constants/data/index";

const Categories = () => {
	return (
		<>
			<h1>Categories</h1>
			<Box>
				<Grid container spacing={3}>
					{CATEGORIES.map((element) => (
						<Grid key={element.id} item xs={12} md={6} lg={3}>
							<CategoryCard imgURL={element.imgURL} title={element.title} />
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default Categories;
