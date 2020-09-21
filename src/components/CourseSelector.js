import React, { useState } from "react";

import Courses from "./Courses";
import SelectedCourse from "./SelectedCourse";
import Cart from "./Cart";

export default () => {
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);

  const handleSelectedCourse = (course) => {
    setSelected(course);
  };

  const handleAddCourse = (courseName) => {
    if (cart.length == 7) {
      return;
    }
    if (cart.includes(courseName)) {
      return;
    }
    setCart([...cart, courseName]);
  };

  const handleDeleteCourse = (courseName) => {
    setCart(
      cart.map((course) => {
        if (course !== courseName) {
          return course;
        }
      })
    );
  };

  return (
    <div className="flex-container">
      <Courses
        handleSelectedCourse={handleSelectedCourse}
        handleAddCourse={handleAddCourse}
      />
      <SelectedCourse selectedCourse={selected} />
      <Cart cart={cart} handleDeleteCourse={handleDeleteCourse} />
    </div>
  );
};
