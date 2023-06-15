import React from "react";
import { useNavigate } from "react-router-dom";
const Item = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="item">
      <div className="item__img-box">
        <img className="img" src={item.imageUrl} />
      </div>
      <div className="item__text-box">
        <button
          className="btn-large"
          onClick={() => navigate(`/items/${item.id}`)}
        >
          {item.name}
        </button>
      </div>
    </div>
  );
};
export default Item;
