'use strict';
const _ = require('lodash');
const db = require('./db.js');

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};

const getHobbies = () => {
  const dataAccessMethod = () => {
    let set = new Set();
    for (let key in db.hobbiesOfUserByUsername) {
      db.hobbiesOfUserByUsername[key].forEach((el) => {
        set.add(el);
      });
    }
    return [...set];
  };
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (hobby) => {
  const dataAccessMethod = () => {
    let userHobbies = db.hobbiesOfUserByUsername;
    let users = db.usersById;

    let resInArr = [];

    let resInObj = {};
    for (let key in userHobbies) {
      if (userHobbies[key].includes(hobby)) {
        for (let key1 in users) {
          if (users[key1].username === key) {
            if (!resInObj[users[key1].age]) resInObj[users[key1].age] = 1;
            else resInObj[users[key1].age]++;
          }
        }
      }
    }

    for (let key in resInObj) {
      resInArr.push({ age: key, count: resInObj[key] });
    }

    return resInArr;
  };
  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getHobbies,
};
