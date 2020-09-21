import React from "react";

export default ({
  courseProps,
  handleSelectedCourse,
  handleAddCourse,
  isDisabled,
}) => {
  return (
    <div
      className={`course-box box ${isDisabled && "disabled-box"}`}
      onClick={() => handleSelectedCourse(courseProps)}
    >
      <div className="flex-container">
        <h2 className="title is-4 mb-0">
          {courseProps.dept} {courseProps.number}
        </h2>
        <button
          className="button is-primary add-button"
          onClick={() =>
            handleAddCourse(`${courseProps.dept}-${courseProps.number}`)
          }
          disabled={isDisabled}
        >
          Add Course
        </button>
      </div>
    </div>
  );
};
