import "./CartItemStyle.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const CartItem = () => {
  return (
    <div className="Cart-item">
      <div>
        <img
          src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
          className="Cart-Product-image"
        />
      </div>
      <div className="Cart-Product-name-and-price">
        <div>
          <p className="Cart-product-name">Name: BOSS Headphone</p>
          <p className="Cart-Product-price">Price: 24000</p>
          <div className="Cart-Product-add-remove">
            <RemoveIcon className="Add-product" />
            <p className="Product-qty">2</p>
            <AddIcon className="Remove-product" />
          </div>
        </div>
      </div>
    </div>
  );
};
