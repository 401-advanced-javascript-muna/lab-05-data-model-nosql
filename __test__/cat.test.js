/* eslint-disable no-undef */
// eslint-disable-next-line strict
'use strict';

require('@code-fellows/supergoose');

const Categories = require('../models/categories.model');

const category = new Categories();

describe(' Categories Testing ', () => {


  it(' get()  category ', () => {
    let newRec = { name:'test name', description:'test description',};


    return category.create(newRec)
      .then(record => {
        return category.get(record._id)
          .then(catItem => {
            Object.keys(newRec).forEach(key => {
              expect(catItem[key]).toEqual(newRec[key]);
            });
          });
      });
  });



  it(' create() a new category ', () => {

    let cat = { name:'test name', description:'test description',};


    return category.create(cat)
      .then(record => {
        Object.keys(cat).forEach(key => {
          expect(record[key]).toEqual(cat[key]);
        });
      });
  });




  it(' Delete() A category ', () => {
    let newRec = { name:'test name', description:'test description',};

    return category.create(newRec)
      .then(record => {
        return category.delete(record._id, record)
          .then(catItem => {
            Object.keys(newRec).forEach(key => {
              expect(catItem[key]).toEqual(newRec[key]);
            });
          });
      });
  });

  it(' update() a category ', () => {


    let newRec =  { name: 'test name updated', description: 'test description updated', };
    return category.create(newRec)
      .then(record => {
        return category.update(record._id, record)
          .then(catItem => {
            Object.keys(newRec).forEach(key => {
              expect(catItem[key]).toEqual(newRec[key]);
            });
          });
      });

  });

});




// 'use strict ';

// require('@code-fellows/supergoose');

// const Categories = require('../models/Categoriess.model');

// describe('Categories Model', () => {
//   it('can create() a new Categories item', () => {
//     const categories = new Categories();

//     let obj = { name:'test name', description:'test description'};
//     return categories.create(obj)
//       .then(record => {
//         Object.keys(obj).forEach(key => {
//           expect(record[key]).toEqual(obj[key]);
//         });
//       });
//   });

//   it('can get() a Categories item', () => {
//     const categories = new Categories();

//     let obj = { name: 'test name',  description: 'test description' };

//     return categories.create(obj)
//       .then(record => {
//         return categories.get(record._id)
//           .then(item => {
//             Object.keys(obj).forEach((key) => {
//               expect(item[0][key]).toEqual(obj[key]);
//             });
//           });
//       });
//   });

//   it('can update() a Categories item', () => {
//     const categories = new Categories();

//     let obj = { name: 'test name', description: 'test description'};
//     let obj2 = { name: 'test name updated', description: 'test description updated' };

//     return categories.create(obj)
//       .then(record => {
//         return categories.update(record._id,obj2)
//           .then(item => {
//             Object.keys(obj).forEach((key) => {
//               expect(item[key]).toEqual(obj2[key]);
//             });
//           });
//       });
//   });

//   it('can delete() a Categories item', () => {
//     const categories = new Categories();

//     let obj = { name: 'test name', description: 'test description'};

//     return categories.create(obj)
//       .then(record => {
//         return categories.delete(record._id)
//           .then(item => {
//             Object.keys(obj).forEach((key) => {
//               expect(item[key]).toEqual(obj[key]);
//             });
//           });
//       });
//   });
// });

