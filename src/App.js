import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = React.useState(products);
  const [searchInput, setSearchInput] = React.useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);
  // console.log(products);

  function search(e) {
    if (e.target.value.length >= 3) {
      setSearchInput(e.target.value);
      const results = products.filter(
        (product) =>
          product.name.includes(e.target.value) ||
          product.brand.includes(e.target.value) ||
          product.description.includes(e.target.value)
      );

      setSearchResult(results);
    } else {
      setSearchResult(products);
    }
  }
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

            <input id="search" onChange={search} />
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
          {!searchInput &&
            products.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.description}</td>
              </tr>
            ))}
          {searchInput &&
            searchResult.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.description}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}

export default App;
