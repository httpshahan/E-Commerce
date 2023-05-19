import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
const Home = () => {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing"
    );
  });

  return (
    <div>
      <h1>Welcome to the Store</h1>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none ms:mx-0">
              {filteredProducts.map((product) => {
                return(<Product product={product} key={product.id} /> )
              })}
            </div> 
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
