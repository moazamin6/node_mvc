"use strict";
const {engine, config} = use('express-edge');
const path = use('path');
const constants = use('Kernel/constants');
const Client = use('Kernel/Client');
const BaseHelper = use('Kernel/BaseHelper');
const route = use('Application/Config/routes');
const express = use('express');
const bodyParser = use('body-parser');
const url_util = use('url');
const app = express();
require('express-edge');

class Bootstrap {
   constructor() {

   }

   initRouting() {
      let controller_name = '';
      let function_name = '';
      let Controller = '';
      app.all('*', (req, res) => {

         let url = url_util.parse(req.url).pathname;
         if (url === '/') {
            controller_name = route.default_controller;
            function_name = route.default_function;

         } else {

            controller_name = url.split('/')[1];
            function_name = url.split('/')[2];
            if (function_name === undefined) {
               function_name = 'index';
            }
         }
         Controller = use(path.join('Application/Controllers', controller_name));
         Client.request = req;
         Client.response = res;
         let ob = new Controller();
         ob[function_name](req.body);
      });
      Object.keys(BaseHelper).forEach((v, i) => {
         // console.log(BaseHelper[v]());
         app.locals[v] = BaseHelper[v];
         global[v] = BaseHelper[v];
      });

      return this;
   }

   fireHttpServer() {

      let port = process.env.PORT;
      let app_url = `http://${process.env.HOST}:${port}`;
      app.listen(port, () => {
         console.log(`Node MVC app listening on ${app_url}`);
      });
      return this;
   }

   initTemplating() {
      app.use(bodyParser.urlencoded({extended: true}));
      config({cache: process.env.NODE_ENV === 'production'});
      app.use(engine);
      app.set('views', constants.VIEW_PATH);
      return this;
   }
}

module.exports = Bootstrap;