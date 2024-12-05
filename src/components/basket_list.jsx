import { BasketItem } from "./basket_item";

export const BasketList = ({ data, onUp, onDown, onDelete }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Count</th>
            <th className="px-4 py-2 text-left">Subtotal</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <BasketItem
              key={item.id}
              item={item}
              onUp={onUp}
              onDown={onDown}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
