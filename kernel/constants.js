const path = require('path');
const APP_PATH = path.join(process.cwd(), 'Application');
const CONTROLLER_PATH = path.join(APP_PATH, 'Controllers');
const KERNEL_PATH = path.join(process.cwd(), 'Kernel');
const CONFIG_PATH = path.join(APP_PATH, 'Config');

module.exports = {
   APP_PATH, CONTROLLER_PATH, KERNEL_PATH, CONFIG_PATH
};