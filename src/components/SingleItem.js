import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import UpdateCampForm from "./UpdateCampForm";

const SingleCampus = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [campus, setCampus] = useState({});
  const [students, setStudents] = useState([]);

  const [showUptForm, setShowUptForm] = useState(false);

  const deleteCampus = async (id) => {
    const response = await fetch(`/api/campuses/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);

    json.success ? navigate("/campuses") : alert(json.message);
  };

  const removeStudent = async (student) => {
    console.log("here", student);
    let student1 = { ...student };
    student1["campusId"] = null;

    const response = await fetch(`/api/students/remove/${student.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student1),
    });
    const json = await response.json();
    console.log("result", json);

    console.log("not here", student);

    if (json.success) {
      const filtered = students.filter((std) => std.id !== student.id);
      console.log("filtered", filtered);
      setStudents((prev) => {
        return [...filtered];
      });
    }
  };

  const updateFormShowHandler = () => {
    setShowUptForm(!showUptForm);
  };

  const updateHandler = async (campus) => {
    const response = await fetch(`/api/campuses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(campus),
    });
    const json = await response.json();
    console.log(json);

    setCampus(json.data);
    setShowUptForm(!showUptForm);
    // json.success? navigate("/campuses") : alert(json.message);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/campuses/${id}`);
      const json = await response.json();
      console.log(json.data);

      const response1 = await fetch(`/api/students/`);
      const json1 = await response1.json();
      const campStudents = json1.data.filter(
        (student) => student.campusId === json.data.id
      );
      setStudents((prev) => {
        return [...campStudents];
      });
      // document.title = campus.name;
      setCampus(json.data);
    })();
  }, []);
  return (
    <div>
      {campus && (
        <>
          <div className="campus-card">
            <img src={campus.imageUrl} alt={campus.name} />
            <h1>{campus.name}</h1>
            <p>{campus.description}</p>
            <p>{campus.address}</p>
          </div>
          {showUptForm && (
            <UpdateCampForm handleSubmit={updateHandler} campus={campus} />
          )}

          <div className="actions">
            <button className="btn" onClick={() => deleteCampus(campus.id)}>
              Delete Campus
            </button>
            <button className="btn" onClick={updateFormShowHandler}>
              Edit Campus
            </button>
          </div>
          <h2>Registered Students</h2>
          <ul className="ulStudents">
            {students.map((student) => {
              return (
                <li key={student.id}>
                  <Link
                    className="student-link"
                    to={`/students/${student.id}`}
                  >{`${student.firstName} ${student.lastName}`}</Link>
                  <label
                    className="btn-remove-student"
                    onClick={() => removeStudent(student)}
                  >
                    x
                  </label>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default SingleCampus;
