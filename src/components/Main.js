import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AllUsers from "./AllUsers";
import AllItems from "./AllItems";
import singleStudent from "./Student";
import SingleCampus from "./SingleCampus";
import NewStudent from "./StudentForm";
import newCampus from "./campusForm";
import SingleStudent from "./SingleUser";
import HomePage from "./HomePage";
import Sort from "./Sort";

const Main = () => {
  return (
    <Router>
      <div>
        <nav className="nav">
          <Link to="/" className="nav-links">
            Home
          </Link>
          <Link to="/users" className="nav-links">
            Users
          </Link>
          <Link to="/items" className="nav-links">
            Items
          </Link>

          <Link to="/Sort" className="nav-links">
            Sorting
          </Link>
        </nav>
        <main>
          <h1>Welcome to School Systems</h1>
        </main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route exact path="/addStudent" element={<NewStudent />} /> */}
          {/* <Route exact path="/addCampus" element={<newCampus />} /> */}
          <Route exact path="/users" element={<AllUsers />} />
          <Route exact path="/items" element={<AllItems />} />
          <Route exact path="/users/:id" element={<SingleUser />} />
          <Route exact path="/items/:id" element={<SingleCampus />} />
          <Route exact path="/Sort" element={<Sort />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
