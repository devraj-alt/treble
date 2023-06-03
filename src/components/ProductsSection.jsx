import "./ProductsSectionStyle.css";
import { Products } from "./assets/products/Products";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export const ProductsSection = () => {
  return (
    <div>
      <div className="ProductList-container">
        {Products.map((items) => {
          return (
            <div>
              <img src={items.image} className="Image-container" />
              <div className="Icon-container">
                <div>
                  <ShoppingCartOutlinedIcon />
                </div>
                <div>
                  <FavoriteBorderOutlinedIcon />
                </div>
                <div className="Item-price">
                  <p> ₹ {items.price}</p>
                </div>
              </div>
              <div className="Item-name">{items.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
