const ProductHighlight = ({ product }) => {
    return (
      <div className="space-y-2">
        <h3 className="font-semibold text-slate-800">Highlights</h3>
        <ul className="list-disc ml-6 text-slate-500 space-y-1">
          <li>Brand: {product.brand}</li>
          <li>Warranty Information: {product.warrantyInformation}</li>
          <li>Shipping Information: {product.shippingInformation}</li>
          <li>Return Policy: {product.returnPolicy}</li>
        </ul>
      </div>
    );
  };
  
  export default ProductHighlight;