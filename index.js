require('./kernel/core');
const {engine} = use('express-edge');
const path = use('path');
const constants = use('Kernel/constants');
const Client = use('Kernel/Client');
const route = use('Application/Config/routes');
const config = use('Application/Config/config');
const express = use('express');
const bodyParser = require('body-parser');
const url_util = use('url');
const app = express();
const port = 3000;

const Bootstrap = use('Kernel/Bootstrap');


let controller_name = '';
let function_name = '';
let Controller = '';
// edge_config({cache: process.env.NODE_ENV === 'production'});
app.use(bodyParser.urlencoded({extended: true}));
app.use(engine);
app.set('views', constants.VIEW_PATH);


//handling all requests
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

app.listen(port, () => console.log(`Node MVC app listening on http://localhost:${port}`));