import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="toolbar" role="banner">
        <img src="logo_white.png" alt="" />
      </div>
      <div className="content" role="main">
        <h2>Products</h2>
        <div className="container">
          <div className="filter">
            <label htmlFor="search">Search</label>

            <input id="search" />
          </div>
          <div className="filter">
            <label htmlFor="brands">Brands</label>

            <select id="brands"></select>
          </div>
          <div className="filter">
            <label htmlFor="in-stock">All</label>
            <input
              type="radio"
              id="in-stock"
              name="stock"
              value="all"
              defaultChecked={true}
            />
            <label htmlFor="in-stock">In stock</label>
            <input type="radio" id="in-stock" name="stock" value="in-stock" />
            <label htmlFor="out-of-stock">Out of stock</label>
            <input
              type="radio"
              id="out-of-stock"
              name="stock"
              value="out-of-stock"
            />
          </div>
        </div>
      </div>
      ;
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody id="products-body"></tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
