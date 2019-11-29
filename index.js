const express = require('express');
const app = express();
const constants = require('./kernel/constants');
const router = require('./kernel/NodeRoutes');
app.use('/', router.getRouter());
router.route('get', '/', 'my_controller@check');


// Routes
// app.use('/', (req, res) => {
//
//    res.send('this is home');
// });
// console.log(constants);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));
