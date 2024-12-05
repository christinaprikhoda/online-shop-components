export const BasketItem = ({ item, onUp, onDown, onDelete }) => {
  return (
    <tr key={item.id} className="border-b">
      <td className="px-4 py-2">{item.title}</td>
      <td className="px-4 py-2">{item.price}</td>
      <td className="px-4 py-2">{item.count}</td>
      <td className="px-4 py-2">{(item.count * item.price).toFixed(2)}</td>
      <td className="px-4 py-2">
        <button
          onClick={() => onUp(item)}
          className="bg-green-500 text-white py-1 px-2 rounded mr-2 hover:bg-green-700"
        >
          +
        </button>
        <button
          onClick={() => onDown(item)}
          className="bg-red-500 text-white py-1 px-2 rounded mr-2 hover:bg-red-700"
        >
          -
        </button>
        <button
          onClick={() => onDelete(item)}
          className="bg-gray-500 text-white py-1 px-2 rounded hover:bg-gray-700"
        >
          x
        </button>
      </td>
    </tr>
  );
};
