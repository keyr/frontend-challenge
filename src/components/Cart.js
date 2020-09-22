import React from "react";
import { Link } from "@reach/router";

export default ({ cart, handleDeleteCourse, handleChangeCart }) => {
  if (cart.length === 0) {
    return (
      <div className="box cart-container">
        <div className="flex-container">
          <h3 className="mb-0 title is-3">Course Cart</h3>
          <a
            className="course-delete delete is-medium"
            onClick={handleChangeCart}
          ></a>
        </div>

        <p>You cart is currently empty!</p>
      </div>
    );
  } else {
    return (
      <div>
        <div className="box cart-container">
          <div className="flex-container">
            <h3 className="mb-0 title is-3">Course Cart</h3>
            <a className="delete is-medium" onClick={handleChangeCart}></a>
          </div>
          <br />

          {cart.map((courseName) => {
            return (
              <div className="flex-container" key={courseName}>
                <p>{courseName}</p>
                <a
                  className="delete is-medium"
                  onClick={() => handleDeleteCourse(courseName)}
                ></a>
              </div>
            );
          })}
          <br />
          <div className="center-container">
            <Link
              to="/receipt"
              className="button is-primary"
              state={{ cart: cart }}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    );
  }
};
