import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Student = ({ student }) => {
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  //--trying some code to del a studnt
  const deleteStudent = async (student) => {
    const response = await fetch(`/api/students/${student.id}`, {
      method: "DELETE",
      
      headers: {
        "Content-Type": "application/json",
      },
     
    });
    const json = await response.json();
    console.log("jasonnnn", json);
    setStudents((prev) => {
      return prev.filter((item) => item.id !== student.id);
    });
    json.success ? navigate("/students") : alert(json.message);
  };

  useEffect(() => {
    (async () => {
      // make async call
      const { data: allData } = await axios.get("/api/students");
      console.log(allData.data);
      setStudents((prev) => {
        return [...allData.data];
      });
    })();
  }, []);
  //--trying some code to del a studnt
  //-----New Code---
  // const studentDelete = async () => {
  //   const stud = await fetch("/api/students");
  //   const updateStud = await stud.json();
  //   console.log("Hello i am new function", updateStud);
  //   setStudents(updateStud.data);
  // };
  // //----New Code----
  console.log("student", student);
  return (
    <div className="student">
      <div className="campus__img-box">
        <img className="img" src={student.imageUrl} />
      </div>
      <div className="campus__text-box">
        <button
          className="btn"
          onClick={() => navigate(`/students/${student.id}`)}
        >
          {student.firstName} {student.lastName}
        </button>
        <label
          className="btn-remove-student"
          onClick={() => deleteStudent(student)}
        >
          x
        </label>
      </div>
    </div>
  );
};

export default Student;
