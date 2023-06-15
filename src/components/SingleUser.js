import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// import UpdateCampForm from "./UpdateCampForm";
import UpdateStudentForm from "./UpdateStudentForm";
const SingleUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //---adding new campus function---
  const [campuses, setCampuses] = useState([]);
  //---adding new student function---

  const [student, setStudent] = useState({});
  const [students, setStudents] = useState([]);
  const [showUptForm, setShowUptForm] = useState(false);

  const deleteStudent = async (id) => {
    const response = await fetch(`/api/students/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);

    json.success ? navigate("/students") : alert(json.message);
  };

  const removeStudent = async (student) => {
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
    console.log(json);

    const filtered = students.filter((student) => student.id !== student.id);
    setStudents((prev) => {
      return [...filtered];
    });
  };

  const updateFormShowHandler = () => {
    setShowUptForm(!showUptForm);
  };

  const updateHandler = async (student) => {
    const response = await fetch(`/api/students/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });
    const json = await response.json();
    console.log("json Priniting update", json);

    setStudent(json.data);
    setShowUptForm(!showUptForm);
    // json.success? navigate("/campuses") : alert(json.message);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/students/${id}`);
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
      setStudent(json.data);

      //----Adding new campus function---

      const campusesData = await fetch("/api/campuses");
      const Campusesjson = await campusesData.json();
      console.log("Campuses inside student SingleStudent", Campusesjson);

      setCampuses(Campusesjson.data);
      //----Adding new campus function---
    })();
  }, []);
  return (
    <div>
      {student && (
        <>
          <div className="card">
            <img src={student.imageUrl} alt={student.name} />
            <h1>
              Name: {student.firstName} {student.lastName}
            </h1>
            <p>Email:{student.email}</p>
            <p>GPA: {student.gpa}</p>
            Campus Name:
            {student.campusId !== null ? (
              campuses.length > 0 &&
              campuses.map(
                (campus) => {
                  console.log("inside field campus name", campus.name);
                  if (campus.id === student.campusId) {
                    return (
                      <Link className="btn-laa" to={`/campuses/${campus.id}`}>
                        {campus.name}
                      </Link>
                    );
                  }
                } //loop closing
              )
            ) : (
              <p>Not registered to any Campus!</p>
            )}
          </div>
          {showUptForm && (
            <UpdateStudentForm handleSubmit={updateHandler} student={student} />
          )}
          <div className="actions">
            <button
              className="btn-del btn"
              onClick={() => deleteStudent(student.id)}
            >
              Delete
            </button>
            <button className="btn " onClick={updateFormShowHandler}>
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleUser;
