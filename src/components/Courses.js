import React, { useState } from "react";
import CourseBox from "./CourseBox";
import SearchBar from "./SearchBar";

export default ({ handleSelectedCourse, handleAddCourse, cart }) => {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (search.trim().length === 0) {
      setError("You need to type something in!");
      return;
    }
    setIsLoading(true);
    fetch(`https://api.pennlabs.org/registrar/search?q=${search}`, {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    })
      .then((resp) => resp.json())
      .then((coursesData) => {
        if (
          !coursesData ||
          !coursesData.courses ||
          coursesData.courses.length === 0
        ) {
          setError("Search is not valid!");
          setIsLoading(false);
          return;
        }
        setError("");
        const tempCoursesData = new Map();
        coursesData.courses.forEach((courseData) => {
          const key = `${courseData.course_department}-${courseData.course_number}`;
          if (!tempCoursesData[key]) {
            tempCoursesData.set(key, {
              key: key,
              dept: courseData.course_department,
              number: courseData.course_number,
              title: courseData.course_title,
              description: courseData.course_description,
            });
          }
        });
        const temp = [];
        console.log(tempCoursesData);
        for (const [_, value] of tempCoursesData) {
          temp.push(value);
        }
        console.log(temp);
        setCourses(temp);
        setIsLoading(false);
      });
  };

  return (
    <div className="course-container">
      <SearchBar
        search={search}
        handleSearch={handleSearch}
        handleSearchSubmit={handleSearchSubmit}
        error={error}
        isLoading={isLoading}
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
