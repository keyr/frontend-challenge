import React from "react";

export default ({ handleChangeCart, showCart }) => (
  <nav className="navbar is-primary is-fixed-top">
    <div className="navbar-menu">
      <h2 className="navbar-item">Penn Course Cart</h2>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        {showCart ? (
          <a className="button is-danger" onClick={handleChangeCart}>
            Hide Cart
          </a>
        ) : (
          <a className="button" onClick={handleChangeCart}>
            See Cart
          </a>
        )}
      </div>
    </div>
  </nav>
);
