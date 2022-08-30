import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState(products);
  const [searchInput, setSearchInput] = useState("");
  const options = Array.from(new Set(products.map((p) => p.brand)));

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  function search(e) {
    // if for the search values
    if (e.target.value.length >= 3) {
      setSearchInput(e.target.value);
      const brands = document.getElementById("brands");
      // if for the brands selector
      if (brands.value === "adidas") {
        products.filter((product) => product.brand.includes("adidas"));
      } else if (brands.value === "ASICS") {
        products.filter((product) => product.brand.includes("ASICS"));
      } else if (brands.value === "nike") {
        products.filter((product) => product.brand.includes("nike"));
      }
      const results = products.filter(
        (product) =>
          (product.name.includes(e.target.value) &&
            product.brand.includes(brands.value)) ||
          product.description.includes(brands.value)
      );

      setSearchResult(results);
    } else if (e.target.value.length === 0) {
      const brands = document.getElementById("brands");
      setSearchResult(
        products.filter((product) => product.brand.includes(brands.value))
      );
    }
  }

  function stock(e) {
    setSearchInput(e.target.value);
    if (e.target.value === "all-stock") {
      setSearchResult(products);
    } else if (e.target.value === "in-stock") {
      setSearchResult(products.filter((p) => p.quantity > 0));
    } else if (e.target.value === "out-of-stock") {
      setSearchResult(products.filter((p) => p.quantity === 0));
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

            <select id="brands" onChange={search}>
              {options.map((option) => (
                <option>{option} </option>
              ))}
            </select>
          </div>
          <div className="filter">
            <label htmlFor="all-stock">All</label>
            <input
              type="radio"
              id="all-stock"
              name="stock"
              value="all-stock"
              onClick={stock}
            />
            <label htmlFor="in-stock">In stock</label>
            <input
              type="radio"
              id="in-stock"
              name="stock"
              value="in-stock"
              onClick={stock}
            />
            <label htmlFor="out-of-stock">Out of stock</label>

            <input
              type="radio"
              id="out-of-stock"
              name="stock"
              value="out-of-stock"
              onClick={stock}
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
