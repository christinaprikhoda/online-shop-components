export const Product = ({ product, onAdd }) => {
  return (
    <div
      key={product.id}
      className="border rounded-lg shadow-md p-4 flex flex-col items-center"
    >
      <img
        src={product.photo}
        alt={product.title}
        className="w-32 h-32 object-cover mb-4"
      />
      <p className="font-semibold text-lg">{product.title}</p>
      <p className="text-gray-700">{product.price} USD</p>
      <small className="text-sm text-gray-500">{product.category}</small>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        onClick={() => onAdd(product)}
      >
        Move to Cart
      </button>
    </div>
  );
};
