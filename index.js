'use strict'
global.import_lib = (lib) => {
   return require('./' + lib);
}
const config = require('./Application/Config/config');
// console.log(config)
// const express = require('express');
// const app = express();
// const path = require('path');
// const constants = require('./kernel/constants');
// const router = require('./kernel/NodeRoutes');
// const r = require(constants.APP_PATH + '/config/routes');
// const dotenv = require('dotenv');
// const hbs = require('express-handlebars');
//
//
// app.set('views', path.join(process.cwd(), "/application/views"));
// app.engine('handlebars', hbs({extname: 'hbs', defaultLayout: ''}));
// app.set('view engine', 'handlebars');
//
//
//
// dotenv.config();
// app.use('/', router.getRouter());
// // router.route('get', '/', 'my_controller@check');
//
// const PORT = process.env.APP_PORT;
// app.listen(PORT, console.log(`server started on port ${PORT}`));