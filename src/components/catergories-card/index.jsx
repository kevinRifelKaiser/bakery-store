import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const CategoryCard = ({ imgURL, title }) => {
  const [imageComponent, setImageComponent] = useState(null);

  useEffect(() => {
    import(`../../assets/category-images/${imgURL}.webp`).then((module) => {
      setImageComponent(module.default);
    });
  }, []);

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={imageComponent}
          alt="cake & macarons"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
