import React, { useState } from "react";
import CourseBox from "./CourseBox";
import SearchBar from "./SearchBar";

export default ({ handleSelectedCourse, handleAddCourse, cart }) => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (search.trim().length === 0) {
      return;
    }
    setIsLoading(true);
    fetch(`https://api.pennlabs.org/registrar/search?q=${search}`, {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    })
      .then((resp) => resp.json())
      .then((coursesData) => {
        if (!coursesData || !coursesData.courses) {
          setIsLoading(false);
          return;
        }
        setCourses(
          coursesData.courses.map((courseData) => {
            return {
              dept: courseData.course_department,
              number: courseData.course_number,
              title: courseData.course_title,
              description: courseData.course_description,
            };
          })
        );
      });
  };

  return (
    <div className="course-container">
      <SearchBar
        search={search}
        handleSearch={handleSearch}
        handleSearchSubmit={handleSearchSubmit}
      />
      {courses.map((props) => {
        const key = `${props.dept}-${props.number}`;
        return (
          <CourseBox
            key={key}
            handleSelectedCourse={handleSelectedCourse}
            handleAddCourse={handleAddCourse}
            courseProps={props}
            isDisabled={cart.includes(key)}
          />
        );
      })}
    </div>
  );
};
