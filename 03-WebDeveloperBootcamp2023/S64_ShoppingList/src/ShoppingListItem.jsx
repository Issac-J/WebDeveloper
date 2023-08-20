const ShoppingListItem = ({ item, quantity, completed }) => {
  return (
    <li
      style={{
        color: completed ? "grey" : "red",
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {item} - {quantity}
    </li>
  );
};

export default ShoppingListItem;
