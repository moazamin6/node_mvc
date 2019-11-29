const path = require('path');
const APP_PATH = path.join(process.cwd(), 'application');
const CONTROLLER_PATH = path.join(APP_PATH, 'controllers');
const KERNEL_PATH = path.join(process.cwd(), 'kernel');
module.exports = {
   APP_PATH,
   CONTROLLER_PATH,
   KERNEL_PATH,
};