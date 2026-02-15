import React, { useState } from "react";

const Sidebar = ({ initialMenuItems }) => {
  // Maintain the menu state for the Sidebar component
  // TODO 2: Maintain Menu State
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  // State for adding new menu items
  // TODO 3: Implement AddMenuItem Callback
  const [newItem, setNewItem] = useState("");

  // State for filtering menu items
  // TODO 4: Filter Menu Items
  const [filterText, setFilterText] = useState("");

  // Function to add a new item to the menu
  // TODO 3: Implement AddMenuItem Callback
  const addMenuItem = () => {
    if (newItem.trim() !== "") {
      setMenuItems([...menuItems, newItem.trim()]);
      setNewItem("");
    }
  };

  // Filter the menu items based on the filter input
  // TODO 4: Filter Menu Items
  const filteredItems = menuItems.filter(item =>
    new RegExp(filterText, "i").test(item)
  );

  return (
    <div className="sidebar">
      <h2>Menu</h2>

      {/* Input for adding new menu items */}
      <input
        type="text"
        placeholder="Add menu item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addMenuItem}>Add</button>

      {/* Input for filtering menu items */}
      <input
        type="text"
        placeholder="Filter menu items"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      {/* Render the menu items */}
      {/* TODO 1: Render Menu Items */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
