import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const products = [
  { id: 1, name: "iPhone 15 Pro", category: "iPhone", price: "₹1,44,900", image: "https://m.media-amazon.com/images/I/81dT7CUY6GL.jpg" },
  { id: 2, name: "Apple Watch Series 9", category: "Watch", price: "₹41,999", image: "https://m.media-amazon.com/images/I/61T4-3BedZL.jpg" },
  { id: 3, name: "AirPods 2nd Generation", category: "AirPods", price: "₹12,900", image: "https://i.ebayimg.com/images/g/fBYAAOSwhtxj5r7Y/s-l1200.jpg" },
  { id: 4, name: "MacBook Air", category: "Mac", price: "₹99,900", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-skyblue-select-202503?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1739303844511" },
  { id: 5, name: "iMac", category: "Mac", price: "₹1,34,900", image: "https://rukminim3.flixcart.com/image/850/1000/xif0q/allinone-desktop/o/1/5/-original-imaguw4jdguzakhb.jpeg?q=90&crop=false" },
  { id: 6, name: "AirPods 3rd Generation", category: "AirPods", price: "₹19,900", image: "https://inventstore.in/wp-content/uploads/2023/05/MME73.webp" },
  { id: 7, name: "Apple Watch Ultra 2", category: "Watch", price: "₹89,900", image: "https://rukminim3.flixcart.com/image/850/1000/xif0q/smartwatch/u/f/b/-original-imagtcnufgp5ffxc.jpeg?q=90&crop=false" },
  { id: 8, name: "Apple Watch SE", category: "Watch", price: "₹29,900", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL53_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1725647080396" },
];

export default function ProductFilter() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  return (
    <div className="bg-light p-5">
      <h1 className="text-center text-4xl font-bold mb-6 text-primary">Apple Store</h1>
      
      {/* Category Filter Buttons */}
      <div className="d-flex justify-content-center mb-4">
        {["All", "iPhone", "Watch", "AirPods", "Mac"].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className="btn btn-info m-2 px-4 py-2 rounded-pill text-white fw-bold shadow-sm hover-shadow"
            style={{ transition: "all 0.3s ease" }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col">
            <div className="card shadow-lg rounded-lg border-0 p-3 hover-shadow">
              <img 
                src={product.image} 
                alt={product.name} 
                className="card-img-top rounded-top" 
                style={{ width: "100%", height: "300px", objectFit: "contain", transition: "transform 0.3s ease" }}
                onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
              />
              <div className="card-body text-center">
                <h5 className="card-title text-primary fw-bold">{product.name}</h5>
                <p className="card-text text-muted">{product.category}</p>
                <p className="card-text text-dark fs-5">{product.price}</p>
                <button 
                  className="btn btn-outline-primary w-100 mt-2"
                  style={{
                    transition: "background-color 0.3s, color 0.3s",
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = "#1a73e8"}
                  onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
