import React, { useRef, useState, useEffect } from "react";

const UpdateItemForm = (props) => {
  const { campus, onName, onDescription, onAddress, onImgUrl } = props;
  // const [name, setName] = useState("");
  // const [location, setLocation] = useState("");
  // const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");

  const nameRef = useRef();
  const addressRef = useRef();
  const descRef = useRef();
  const imgRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      address: addressRef.current.value,
      description: descRef.current.value,
      imageUrl: imgRef.current.value,
    };
    console.log(formData);
    props.handleSubmit(formData);
  };

  useEffect(() => {
    nameRef.current.value = campus.name;
    addressRef.current.value = campus.address;
    descRef.current.value = campus.description;
    imgRef.current.value = campus.imageUrl;
  }, []);

  return (
    <main>
      <h1>Editing info in process..</h1>
      <form className="formStyling " onSubmit={handleSubmit}>
        <div class="sizing_box">
          <ul>
            <li>
              <label className="label" htmlFor="firstName">
                Name:
              </label>
              <input
                className="field-style field-split student-edit-input-small"
                placeholder="This field is required!"
                type="text"
                name="name"
                ref={nameRef}
                required
              ></input>
            </li>
            <li>
              <label className="label" htmlFor="Address">
                Address:
              </label>
              <input
                className="field-style field-split student-edit-input-small"
                placeholder="This field is required!"
                type="text"
                name="address"
                ref={addressRef}
                required
              ></input>
            </li>
            <li>
              <label className="label" htmlFor="Description">
                Description:
              </label>
              <input
                className="field-style field-split student-edit-input-small"
                placeholder="This field is required!"
                type="text"
                name="description"
                ref={descRef}
                required
              ></input>
            </li>
            <li>
              <label className="label" htmlFor="imageUrl">
                imageUrl:
              </label>
              <input
                className="field-style field-split student-edit-input-small"
                placeholder="This field is required!"
                type="text"
                name="imageUrl"
                ref={imgRef}
                required
              ></input>
            </li>
            <button className="update-btn-style" type="submit">
              Submit
            </button>
          </ul>
        </div>
      </form>
    </main>
  );
};

export default UpdateItemForm;
