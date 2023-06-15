import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
const handleSort = () => {
  console.log("clicked");
  <div class="dropdown">
    <ul>
      <li>Option 1</li>
      <li>Option 2</li>
      <li>Option 3</li>
      <li>Option 4</li>
    </ul>
  </div>;
};
const Sorting = () => {
  const [students, setStudents] = useState([]);
  const [campuses, setCampuses] = useState([]);

  return (
    <>
      <h1>Sorting</h1>

      <button on onClick={handleSort}>
        Sorting Menu
      </button>
    </>
  );
};

export default Sorting;
