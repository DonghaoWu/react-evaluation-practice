'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (req, res) => {
  const hobbyToLookup = req.params.hobby;
  const data = await mockDBCalls.getListOfAgesOfUsersWith(hobbyToLookup);
  return res.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
  app.get('/users/age/:hobby', getListOfAgesOfUsersWithHandler);
};
