import React from "react";
import { Redirect } from "@reach/router";

export default (props) => {
  const cart = props.location.state.cart;
  if (!cart || cart.length === 0) {
    return <Redirect to="/" noThrow />;
  } else {
    return (
      <>
        <div>
          {cart.map((course) => {
            return <div key={course}>{course}</div>;
          })}
        </div>
      </>
    );
  }
};
