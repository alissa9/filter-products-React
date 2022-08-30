# Goal:

To display the provided product data within a grid and apply the filtering options.

# Instructions:

- How to run this app. run the following commands in a 2 seperate terminals:
- terminal 1:(React)
  - npm install
  - npm start
- terminal 2: (Server)
  - npm run server

- Here are the tasks:

1- Hook up the search input box to filter down products.
	- The search should match using the name, description and brand properties.
	- The search should not fire unless a minimum of three characters have been typed.
	- The search should only fire a maximum of once per 400 milliseconds.

2- Hook up the brand filter drop down.
	- A list of unique brands should be populated as options.  These should be populated from the brand property from the collection of products in the grid and only needs to be populated once.
	- Selecting a brand from the drop down should update the grid and show only products with the selected matching brand.

3- Hook up the stock filter.
	- Selecting All should show all products regardless of quantity number. (Default)
	- Selecting In Stock should show only products that have a quantity higher than zero.
	- Selecting Out of Stock should show only products that have a quantity of zero.

4- All filters should be inclusive.
	- If searching for “shoe” with the brand selected as “Nike” and In Stock, then only products matching all three filters should be shown in the grid.
