import React, { useState, useEffect } from "react";
import ItemForm from "./ItemForm";
import axios from "axios";
import Item from "./item";
const AllItems = () => {
  const [items, setItems] = useState([]);
  const [showNewForm, setShowNewForm] = useState(false);

  const handleSort = () => {
    let sortedItems = [...items];
    sortedItems.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setCampuses(sortedItems);
  };

  const submitHandler = async (item) => {
    const response = await axios.post("/api/items", item);
    console.log("server data", response.data);
    const newItem = {
      ...response.data,
    };
    let previous = [...items];
    previous = [...previous, newItem];
    setItems(previous);
    //updating DOM
    const itemData = await fetch("/api/items");
    const json = await itemData.json();

    setItems(json.data);
  };

  useEffect(() => {
    (async () => {
      // make async call
      const { data: allData } = await axios.get("/api/items");
      console.log(allData.data);
      setCampuses((prev) => {
        return [...allData.data];
      });
    })();
  }, []);
  return (
    <div className="all-items">
      <button className="btn" onClick={handleSort}>
        Sorting by Name
      </button>

      <h2>All Items available in Store</h2>

      <div className="campuses-container grid grid-col-2">
        <div className="campues-div">
          {items.length > 0 &&
            items.map((item, idx) => {
              return <Item item={item} key={item.id} />;
            })}
        </div>

        <div className="form-div">
          <button
            className="btn btn-add-new mb-sm"
            onClick={(e) => setShowNewForm(!showNewForm)}
          >
            Add new Item
          </button>

          {showNewForm && <ItemForm handleSubmit={submitHandler} />}
        </div>
      </div>
    </div>
  );
};

export default AllItems;
