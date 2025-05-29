const ProductContainer = ({ products, addToCart }) => {
  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-container">
          <img src={product.images[0]} alt="" className="product-image" />
          <h4>{product.title}</h4>
          <p>₹ {product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductContainer;
