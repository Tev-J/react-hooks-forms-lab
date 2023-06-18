import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [itemsList, setItemsList] = useState(items);
  const [search, setSearch] = useState("");

  function handleSearchChange(value) {
    setSearch(value);
  }

  const handleItemFormSubmit = (newItem) => {
    const updatedItems = [...itemsList, newItem];
    setItemsList(updatedItems);
  };

  const itemsToDisplay = itemsList.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter search={search} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
