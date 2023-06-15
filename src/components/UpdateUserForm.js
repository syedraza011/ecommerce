import React, { useRef, useState, useEffect } from "react";
import Student from "./Student";

const UpdateStudentForm = (props) => {
  const [newStudent, setNewStudents] = useState({});
  const [campusInfo, setCampusInfo] = useState([]);
  const { student, onName, onDescription, onAddress, onImgUrl } = props;

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
      emailRef: emailRef.current.value,
      imageUrl: imageRef.current.value,
      gpa: gpaRef.current.value,
      campusId: +campusIdRef.current.value,
    };
    console.log(formData);

    props.handleSubmit(formData);
    const studentData = await fetch(`/api/students`);
    const json = await studentData.json();

    setNewStudents(json.data);
    console.log("Inside Student Form Data", studentData);
  };

  useEffect(() => {
    (async () => {
      const camp = await fetch("/api/campuses");
      const json = await camp.json();
      const campusInfo = json.data;
      console.log("Campuses insdie effect", campusInfo);
      setCampusInfo(json.data);
    })();

    (firstNameRef.current.value = student.firstName),
      (lastNameRef.current.value = student.lastName),
      (emailRef.current.value = student.email),
      (imageRef.current.value = student.imageUrl),
      (gpaRef.current.value = student.gpa),
      (campusIdRef.current.value = student.campusId);
  }, []);

  return (
    <main>
      <h1>Update Student information in prog.... </h1>

      {/* new data........... */}

      <form className="formStyling " onSubmit={handleSubmit}>
        <ul>
          <li>
            <label className="label" htmlFor="firstName">
              First Name:
            </label>
            <input
              className="field-style field-split student-input-size"
              placeholder="This field is required!"
              type="text"
              name="firstName"
              ref={firstNameRef}
              required
            ></input>
          </li>
          <li>
            <label className="label" htmlFor="lastName">
              Last Name:
            </label>
            <input
              className="field-style field-split student-input-size"
              placeholder="This field is required!"
              type="text"
              name="lastName"
              ref={lastNameRef}
              required
            ></input>
          </li>
          <li>
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              className="field-style field-split student-input-size"
              placeholder="This field is required!"
              type="text"
              name="email"
              ref={emailRef}
              required
            ></input>
          </li>
          <li>
            <label className="label" htmlFor="Gpa">
              GPA:
            </label>
            <input
              className="field-style field-split student-input-size"
              placeholder="This field is required!"
              type="integer"
              name="Gpa"
              ref={gpaRef}
              required
            ></input>
          </li>

          <label className="label" htmlFor="imageUrl">
            imageUrl:
          </label>
          <input
            className="field-style field-split student-input-size"
            placeholder="This field is required!"
            type="text"
            name="imageUrl"
            ref={imageRef}
            required
          ></input>

          <li>
            <label className="label" htmlFor="campusId">
              Campus:
            </label>
            <select
              placeholder="This field is required!"
              type="text"
              name="imageUrl"
              ref={campusIdRef}
              required
            >
              {campusInfo.map((camp) => {
                return (
                  <option
                    key={camp.id}
                    selected={student.id === camp.id ? true : false}
                    value={camp.id}
                  >
                    {camp.name}
                  </option>
                );
              })}
            </select>
          </li>
          <button className="btn-style" type="submit">
            Submit
          </button>
        </ul>
      </form>
    </main>
  );
};

export default UpdateStudentForm;
