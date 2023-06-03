import "./SingleProductStyle.css";

export const SingleProduct = () => {
  return (
    <div className="Wraper">
      <div className="product-Image-Container">
        <img
          src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
          alt="product image"
          className="Product-Img"
        />
      </div>
      <div className="Info-Container">
        <p className="Product-Name">Headphone</p>
        <p className="Product-Price">₹. 24000</p>
        <p className="Product-Description">
          About this item Iconic quiet. Comfort. And sound. The first noise
          cancelling headphones are back, now with lightweight materials for
          premium comfort and proprietary acoustic technology for deep, clear
          audio.
        </p>
        <div className="Button-Container">
          <button className="AddCartButton">Add to Cart</button>
          <button className="BuyNowButton">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
