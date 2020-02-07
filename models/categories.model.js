/* eslint-disable no-empty-function */
/* eslint-disable no-undef */
// eslint-disable-next-line strict
'use strict';

const schema = require('../schemas/cat.schema');

const Model = require('./model');

class Categories extends Model{
  constructor(){
    super(schema);
  }


  //   get(_id){
  //     if(_id){
  //       return schema.findOne({_id,});
  //     }
  //     else {
  //       return schema.find({});
  //     }
  //   }

  //   create(record){
  //     // eslint-disable-next-line
  //     let newRecord = new schema(record);
  //     return newRecord.save();
  //   }

  //   update(_id,record){
  //     return schema.findByIdAndUpdate(_id,record,{ new:true,});
  //   }

  //   delete(_id){
  //     return schema.findByIdAndDelete(_id);
  //   }

}

module.exports = Categories;