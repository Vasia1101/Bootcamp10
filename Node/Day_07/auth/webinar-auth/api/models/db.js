const mongoose = require('mongoose');
const Cats = require('./schema');

const isNotValid = data => {
  let isName = !!data.name;
  let isAge = !!data.age;
  return !isName || !isAge;
};

module.exports.gets = function() {
  return Cats.find();
};

module.exports.getById = function(paramsId) {
  return Cats.find({ _id: paramsId });
};

module.exports.add = function(data) {
  if (isNotValid(data)) {
    return Promise.reject(new Error('Data format is not correct'));
  }
  const Cat = new Cats({
    name: data.name,
    age: parseInt(data.age),
  });

  return Cat.save();
};

module.exports.update = function(data, paramsId) {
  if (isNotValid(data)) {
    return Promise.reject(new Error('Data format is not correct'));
  }
  const Cat = {
    name: data.name,
    age: parseInt(data.age),
  };

  return Cats.findByIdAndUpdate(
    {
      _id: paramsId,
    },
    {
      $set: Cat,
    },
    { new: true }
  );
};

module.exports.delete = function(paramsId) {
  return Cats.findByIdAndRemove({ _id: paramsId });
};
