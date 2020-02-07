/* eslint-disable no-undef */
// eslint-disable-next-line strict
'use strict ';

const mongoose = require('mongoose');

const Categories = require('./models/categories.model');

const Products = require('./models/products.model');

const MONGOOSE_URI = 'mongodb://localhost:27017/cat-pro-db';

// const mongooseOptions = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// };

// mongoose.connect(MONGOOSE_URI, mongooseOptions);

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, });

// const clothes = new Categories({ name: 'clothes', description: 'desssssssss2222s'});

// clothes.save();

// const dress = new Products({ name: 'dress11',price:'452222',weight:'47',quantityInStock: '100'});

// dress.save();

let clothes = new Categories;

let dress = new Products;

clothes.create({ name: 'clot', description: 'des',});

dress.create({ name: 'dress11',price:'4',weight:'4',quantityInStock: '100',});