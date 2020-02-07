/* eslint-disable no-undef */
'use strict';

require('@code-fellows/supergoose');

const Products = require('../models/products.model');

const product = new Products();

describe(' Categories Testing ', () => {


  it(' can get() any product ', () => {

    let rec = {name:'name1' , price: 'price1', weight: 'weight1', quantityInStock: 'quantityInStock1',};

    return product.create(rec)
      .then(record => {
        return product.get(record._id)
          .then(item => {
            Object.keys(rec).forEach(key => {
              expect(item[key]).toEqual(rec[key]);
            });
          });
      });

  });


  it(' can create() A new product ', () => {
    let newrecord = {name:'name1' , price: 'price1', weight: 'weight1', quantityInStock: 'quantityInStock1',};
    return product.create(newrecord)
      .then(record => {
        Object.keys(newrecord).forEach(key => {
          expect(record[key]).toEqual(newrecord[key]);
        });
      });

  });

  it(' can update() A product ', () => {
    let oldRecord = {name:'name1' , price: 'price1', weight: 'weight1', quantityInStock: 'quantityInStock1',};
    let newRecord = {name:'name2' , price: 'price2', weight: 'weight2', quantityInStock: 'quantityInStock2',};

    return product.create(oldRecord)
      .then(record => {
        return product.update(record._id, newRecord)
          .then(prod => {
            Object.keys(oldRecord).forEach(key => {
              expect(prod[key]).toEqual(newRecord[key]);
            });
          });
      });

  });

  it(' can Delete() A product ', () => {
    let oldRecord = {name:'name1' , price: 'price1', weight: 'weight1', quantityInStock: 'quantityInStock1',};
    return product.create(oldRecord)
      .then(record => {
        return product.delete(record._id, record)
          .then(prod => {
            Object.keys(oldRecord).forEach(key => {
              expect(prod[key]).toEqual(oldRecord[key]);
            });
          }) ;
      });

  });

});
// // eslint-disable-next-line strict
// 'use strict ';

// require('@code-fellows/supergoose');

// const Product = require('../models/products.model');

// describe('Product Model', () => {
//     it('can create() a new product ', () => {
//       const product = new Product();

//       let obj = {category:'category1' , price: 'price1', weight: 'weight1', quantityInStock: 'quantityInStock1'};
//       return product.create(obj)
//         .then(record => {
//           Object.keys(obj).forEach(key => {
//             expect(record[key]).toEqual(obj[key]);
//           });
//         });
//     });

//     it('can get() a Product ', () => {
//       const product = new Product();

//       let obj = {category:'category1' , price: 'price1', weight: 'weight1', quantityInStock: 'quantityInStock1'};

//       return product.create(obj)
//         .then(record => {
//           return product.get(record._id)
//             .then(item => {
//               Object.keys(obj).forEach((key) => {
//                 expect(item[0][key]).toEqual(obj[key]);
//               });
//             });
//         });
//     });

//     it('can update() a product ', () => {
//       const product = new Product();

//       let obj1 = {category:'category1' , price: 'price1', weight: 'weight1', quantityInStock: 'quantityInStock1'};
//       let obj2 = {category:'category2' , price: 'price2', weight: 'weight2', quantityInStock: 'quantityInStock2'};

//       return product.create(obj1)
//         .then(record => {
//           return product.update(record._id,obj2)
//             .then(prod => {
//               Object.keys(obj1).forEach((key) => {
//                 expect(prod[key]).toEqual(obj2[key]);
//               });
//             });
//         });
//     });

//     it('can delete() a product ', () => {
//       const product = new Product();

//       let obj = {category:'category1' , price: 'price1', weight: 'weight1', quantityInStock: 'quantityInStock1'};

//       return product.create(obj)
//         .then(record => {
//           return product.delete(record._id)
//             .then(prod => {
//               Object.keys(obj).forEach((key) => {
//                 expect(prod[key]).toEqual(obj[key]);
//               });
//             });
//         });
//     });
//   });


