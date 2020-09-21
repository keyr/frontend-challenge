import React from "react";

export default ({ selectedCourse }) => {
  if (!selectedCourse) {
    return (
      <div className="box selected-container">
        <div className="title is-3">Select a course!</div>
      </div>
    );
  }
  return (
    <div className="box selected-container">
      <div className="title is-3">{`${selectedCourse.dept}-${selectedCourse.number}`}</div>
      <div className="subtitle">{selectedCourse.title}</div>
      <p className="course-description">{selectedCourse.description}</p>
    </div>
  );
};
