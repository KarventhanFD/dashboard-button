import React from "react";
import ProductCard from "../components/ProductCard"; // Import ProductCard component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Home = () => {
  // Sample products for display
  const products = [
    { id: 1, title: "Smartphone", description: "Latest 5G smartphone.", price: 6999, rating: 4, 
        image: "./Images/1.jpg" ,stock: 5},
    { id: 2, title: "Smart TV", description: "Powerful gaming laptop.", price: 12999, rating: 5, image: "./Images/3.jpg" ,stock: 4},
    { id: 3, title: "Earphones", description: "Noise-canceling earphones.", price: 1999, rating: 4, image: "./Images/4.jpg",stock: 5 },
    { id: 4, title: "Smartwatch", description: "Fitness tracking smartwatch.", price: 2499, rating: 4, image: "./Images/2.jpg" , stock: 5},
    { id: 5, title: "Shoe", description: "Comfort and fit", price: 799, rating: 4, image: "./Images/5.jpg",
      stock: 5
     },
    { id: 6, title: "Laptop", description: "Powerful gaming laptop.", price: 899, rating: 5, image: "./Images/6.jpg" ,stock: 5},
    { id: 7, title: "Headphones", description: "Wireless over-ear headphones.", price: 1499, rating: 4, image: "./Images/headphone.jpg" , stock: 1},
    { id: 8, title: "Speaker", description: "Sony Bluetooth portable speaker.", price: 999, rating: 4, image: "./Images/speaker.jpg" ,stock: 2},
    { id: 9, title: "Ram", description: "Next-gen gaming console.", price: 499, rating: 5, image: "./Images/ram.jpg" ,stock: 6},
    { id: 10, title: "Monitor", description: "4K ultra HD monitor.", price: 3299, rating: 4, image: "./Images/monitor.jpg" ,stock: 5},
  ];

  return (
    <div className="container mt-4">
        <h2 className="text-center mb-4">Our Products</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-2"> {/* Adjust column width */}
              <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
