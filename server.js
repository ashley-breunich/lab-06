'use strict';

const superagent = require('superagent');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;
const API = process.env.API_URL || 'http://localhost:3000';

// Set up EJS as our template agent 
app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/', homePage);
app.get('/categories', categoryPage);
app.get('/categories/:name', productsPage);


function homePage(request,response) {
  response.render('site', {page:'./pages/index', title:'Our Site: Home'});
}
  

function categoryPage(request,response) {
  superagent.get(`${API}/categories`)
    .then( data => {
      response.render('site', {categories:data.body, page:'./pages/categories', title:'Our Site: Categories'});
  
    })
    .catch( error => console.error(error) );
  
}

function productsPage(request,response) {
  superagent.get(`${API}/products?category=${request.params.name}`)
    .then( data => {
      response.render('site', {products:data.body, page:'./pages/products', title:'Our Site: Products'});
  
    })
    .catch( error => console.error(error) );
  
}

app.listen(PORT, () => console.log(`Server up on ${PORT}`));

module.exports = {
  server: app,
};