import React, { useState } from "react";
import Courses from "../components/Courses";
import SelectedCourse from "../components/SelectedCourse";
import Cart from "../components/Cart";
import Nav from "../components/Nav";

export default () => {
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

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
    setSelected(null);
  };

  const handleDeleteCourse = (courseName) => {
    setCart(cart.filter((course) => course !== courseName));
  };

  const handleChangeCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Nav handleChangeCart={handleChangeCart} showCart={showCart} />
      <div className="flex-container">
        <Courses
          handleSelectedCourse={handleSelectedCourse}
          handleAddCourse={handleAddCourse}
          cart={cart}
        />
        <SelectedCourse selectedCourse={selected} />
        {showCart && (
          <Cart
            cart={cart}
            handleDeleteCourse={handleDeleteCourse}
            handleChangeCart={handleChangeCart}
          />
        )}
      </div>
    </>
  );
};
