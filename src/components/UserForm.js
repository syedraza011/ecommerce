import React, { useRef, useEffect, useState } from "react";
import AllCampuses from "./AllCampuses";

const UserForm = (props) => {
  // const { state, handleChange, handleSubmit } = props;

  const [campuses, setCampuses] = useState([]);
  const [students, setStudents] = useState([]);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const imageRef = useRef();
  const gpaRef = useRef();
  const campusIdRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      imageUrl: imageRef.current.value,
      gpa: gpaRef.current.value,
      campusId: +campusIdRef.current.value,
    };

    console.log(formData);
    props.handleSubmit(formData);

    async () => {
      const studentData = await fetch("/api/students");
      const json = await studentData.json();

      setStudents(json.data);
      console.log("Inside Student Form Data", studentData);
    };
  };

  useEffect(() => {
    (async () => {
      const studentData = await fetch("/api/students");
      const json = await studentData.json();

      setStudents(json.data);
      const campusesData = await fetch("/api/campuses");
      const Campusesjson = await campusesData.json();
      console.log("Campuses inside student", Campusesjson);
      setCampuses(Campusesjson.data);
    })();
  }, []);
  return (
    <main>
      <h1>Add User </h1>

      {/* new data........... */}

      <form className="formStyling" onSubmit={handleSubmit}>
        <ul>
          <li>
            {/* <label htmlFor="firstName">First Name:</label> */}
            <input
              className="field-style field-split align-left"
              placeholder="Name"
              type="text"
              name="firstName"
              ref={firstNameRef}
              required
            ></input>
            {/* <label htmlFor="lastName">Last Name:</label> */}
            <input
              className="field-style field-split align-right"
              placeholder="Last Name"
              type="text"
              name="lastName"
              ref={lastNameRef}
              required
            ></input>
          </li>
          <li>
            {/* <label htmlFor="email">Email:</label> */}
            <input
              className="field-style field-split align-left"
              placeholder="Email"
              type="text"
              name="email"
              ref={emailRef}
              // required
            ></input>
            {/* <label htmlFor="Gpa">GPA:</label> */}
            <input
              placeholder="GPA"
              className="field-style field-split align-right"
              type="integer"
              name="Gpa"
              ref={gpaRef}
              required
            ></input>
          </li>
          <li>
            <input
              className="field-style field-split align-left"
              placeholder="imageUrl"
              type="text"
              name="imageUrl"
              ref={imageRef}
              required
            ></input>
          </li>

          <select
            placeholder="This field is required!"
            type="text"
            name="imageUrl"
            ref={campusIdRef}
            required
          >
            <option key="5" disabled selected value={null}>
              --Select your campus--
            </option>
            {campuses.map((campus) => {
              return (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              );
            })}
          </select>
          <button className="btn-style" type="submit">
            Submit
          </button>
        </ul>
      </form>
    </main>
  );
};

export default UserForm;
