import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { setAllItems } from "../store/reducers/itemSlice";
import { setAllUsers } from "../store/reducers/userSlice";
const HomePage = () => {
  const dispatch = useDispatch();
  const itemSlice = useSelector((state) => state.item);
  const userSlice = useSelector((state) => state.user);
  const searchFunction = (e) => {
    e.preventDefault();
    dispatch(
      setAllItems({
        items: itemSlice.data.filter((item) => {
          if (item.name === itemSlice.name) {
            return item.name;
          } else {
            return <p>Nothing there</p>;
          }
          console.log("i am here in campus filter", campus.name);
        }),
      })
    );
    // dispatch(
    //   setAllUsers({
    //     students: userSlice.data.filter((student) => {
    //       student.firstName === userSlice.firstName;
    //       console.log("i am student in search ", student);
    //     }),
    //   })
    // );
  };
  const removeItem = (itemJson) => {
    dispatch(
      setAllItems({
        items: itemSlice.data.filter((item) => item.id !== itemJson.id),
      })
    );
  };

  const removeUser = (userJson) => {
    dispatch(
      setAllUsers({
        users: userSlice.data.filter((user) => user.id !== userJson.id),
      })
    );
  };

  useEffect(() => {
    // dispatch(setAllItems());

    (async () => {
      const response = await fetch("http://localhost:3000/api/items");
      const itemJson = await response.json();
      console.log(itemJson);

      dispatch(
        setAllItems({
          items: itemJson.data,
        })
      );

      const userResponse = await fetch("http://localhost:3000/api/users");
      const userJson = await userResponse.json();
      console.log(userJson);

      dispatch(
        setAllUsers({
          users: userJson.data,
        })
      );
    })();
  }, []);
  return (
    <div className="home-page">
      <form>
        {/* <label htmlFor="campus">Search by typing anything</label> */}
        <input
          className="filter"
          placeholder="Type here to search any campus or students..."
        ></input>
        <button className="btn" onClick={searchFunction}>
          Search
        </button>
      </form>

      <div className="home-page__content">
        <div className="home-page__campuses-container">
          <h1>Campuses</h1>
          {itemSlice.data &&
            itemSlice.data.map((campus) => {
              return (
                <div key={campus.id} className="home-page__campus">
                  <h2>
                    <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                    <label
                      className="btn-remove-student"
                      onClick={() => removeCampus(campus)}
                    >
                      x
                    </label>
                  </h2>
                </div>
              );
            })}
        </div>

        <div className="home-page__students-container">
          <h1>Students</h1>

          {userSlice.data &&
            studentSlice.data.map((student) => {
              return (
                <div key={student.id} className="home-page__student">
                  <h2>
                    <Link to={`/students/${student.id}`}>
                      {student.firstName} {student.lastName}
                    </Link>
                    <label
                      className="btn-remove-student"
                      onClick={() => removeStudent(student)}
                    >
                      x
                    </label>
                  </h2>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
