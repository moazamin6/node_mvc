"use strict";
const express = require('express');
const path = require('path');
const constants = require('./constants');
const router = express.Router();

module.exports = {

   route: (method, url, callback) => {

      // console.log(constants.CONTROLLER_PATH);
      let controller = callback.split('@')[0];
      let func = callback.split('@')[1];
      let controller_object = require(path.join(constants.CONTROLLER_PATH, controller));
      router.get(url, controller_object[func]);

   },
   get: (url, callback) => {

      let controller = callback.split('@')[0];
      let func = callback.split('@')[1];
      let controller_object = require(path.join(constants.CONTROLLER_PATH, controller));
      router.get(url, controller_object[func]);
   },
   post: (url, callback) => {

      let controller = callback.split('@')[0];
      let func = callback.split('@')[1];
      let controller_object = require(path.join(constants.CONTROLLER_PATH, controller));
      router.post(url, controller_object[func]);
   },
   getRouter: () => {
      return module.exports = router;
   }
};