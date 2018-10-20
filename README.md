[![Build Status](https://www.travis-ci.com/ashley-breunich/lab-06.svg?branch=master)](https://www.travis-ci.com/ashley-breunich/lab-06)

![CF](http://i.imgur.com/7v5ASc8.png) LAB: HTTP and REST
========================================================

## Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Assignment
###### Requirements
* Implement an API server for a storefront, using json-server
  * Create a sub-folder called `data` with a `db.json` file
  * Start your json-server from within this folder
  * Data models should contain the following fields:
    * `categories`
      * `_id`, `name`, `display_name`, `description`
    * `products`
      * `_id`, `category`, `name`, `display_name`, `description`

* Implement a Web Server with express and ejs
  * Static routes and assets served from the public folder
  * Use 'ejs' as your 'view engine'
  * Implement a `site.ejs` master template that pulls in a partial into the `<main></main>` element based on the 'page' being served
  * Declare 3 get routes:
  * /
    * Home Page
    * Use `pages/index.ejs`
  * /categories
    * Lists each categories and draws a link to a detail page (/category/:name)
    * Use `pages/categories.ejs`
  * /category/:name
    * Lists the products in the category
    * Use `pages/products.ejs`

* Install and fire up RESTy
  * For this lab task, lets just get our REST client up and running
  * Download it from the class repo
  * Install it using `npm install`
  * Start it using `npm run dev`


###### Testing
**Web Server**

* Use `supertest` to assert that the server responds to the routes
* Mock out the API calls in the web server test


##  Documentation
The module.exports on the server.js file exports the server that we created on this page and allows us to use it on the testing page. It also sets a port.  

#### homePage():
Airty: 2
Expected Data: It takes in a request and a response and is used as the callback function in a get request
Behavior: If it behaves correctly, it will render the home page with the data we pass through it.

#### categoryPage():
Airty: 2
Expected Data: It takes in a request and a response and is used as the callback function in a get request
Behavior: If it behaves correctly, it will render the category page with the data we pass through it. If it doesn't behave correctly, it will throw an error. 

#### productsPage():
Airty: 2
Expected Data: It takes in a request and a response and is used as the callback function in a get request
Behavior: If it behaves correctly, it will render the products page with the data we pass through it. If it doesn't behave correctly, it will throw an error.
