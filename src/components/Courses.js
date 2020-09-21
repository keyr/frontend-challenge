import React from "react";
import courses from "../data/courses";
import CourseBox from "./CourseBox";

export default ({ handleSelectedCourse, handleAddCourse }) => (
  <div className="course-container">
    {courses.map((props) => (
      <CourseBox
        key={`${props.dept}-${props.number}`}
        handleSelectedCourse={handleSelectedCourse}
        handleAddCourse={handleAddCourse}
        courseProps={props}
      />
    ))}
  </div>
);
