import { Product } from "./product";

export const ProductList = ({ data, onAdd }) => {
  return (
    <div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
};
