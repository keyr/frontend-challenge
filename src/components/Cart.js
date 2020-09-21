import React from "react";

export default ({ cart }) => {
  if (cart.length === 0) {
    return (
      <div className="box cart-container">
        <h3 className="title is-3">Course Cart</h3>

        <p>You cart is currently empty!</p>
      </div>
    );
  } else {
    return (
      <div>
        <div className="box cart-container">
          <h3 className="title is-3">Course Cart</h3>

          {cart.map((courseName) => {
            return (
              <div className="flex-container">
                <p>{courseName}</p>
                <a class="course-delete delete is-medium"></a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
