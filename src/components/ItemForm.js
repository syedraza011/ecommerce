import React, { useRef, useEffect, useState } from "react";

const ItemForm = (props) => {
  // const { state, handleChange, handleSubmit } = props;

  const [items, setItems] = useState([]);

  const nameRef = useRef();
  const addressRef = useRef();
  const descRef = useRef();
  const costRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const imgRef = useRef();
  const campusIdRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      address: addressRef.current.value,
      description: descRef.current.value,
      imageUrl: imgRef.current.value,
      // campusId: campusIdRef.current.value,
    };

    console.log(formData);
    props.handleSubmit(formData);
    const _item = await fetch("/api/items");
    const json = await _item.json();

    setItems(json.data);
  };

  useEffect(() => {
    (async () => {
      const _item = await fetch("/api/items");
      const json = await _item.json();

      setItems(json.data);
    })();
  }, []);
  return (
    <main>
      <h1>Add a New Item </h1>
      <form className="formStyling" onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
              className="campusSmallBoxSize"
              placeholder="Name of the Item"
              type="text"
              name="name"
              ref={nameRef}
              required
            ></input>
          </li>
          <li>
            <input
              className="campusSmallBoxSize"
              placeholder="Address"
              type="text"
              name="address"
              ref={addressRef}
              required
            ></input>
          </li>
          <li>
            <input
              className="campusSmallBoxSize"
              placeholder="image URL"
              type="text"
              name="imageUrl"
              required
              ref={imgRef}
            ></input>
          </li>
          <li>
            <input
              className="campusBoxSize"
              // size="100"
              // className="field-style field-split "
              placeholder="Description goes here..."
              type="text"
              name="description"
              ref={descRef}
              required
            ></input>
          </li>

          <div className="btn-action">
            <button className="btn-style" type="submit">
              Submit
            </button>
          </div>
        </ul>
      </form>
    </main>
  );
};

export default ItemForm;
