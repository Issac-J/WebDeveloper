import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = ({ items }) => {
  return (
    <ul>
      {items &&
        items.map((i) => (
          <ShoppingListItem
            key={i.id}
            item={i.item}
            quantity={i.quantity}
            completed={i.completed}
          />
        ))}
    </ul>
  );
};

export default ShoppingList;
