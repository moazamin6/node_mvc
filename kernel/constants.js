const path = require('path');
const APP_PATH = path.join(process.cwd(), 'Application');
const CONTROLLER_PATH = path.join(APP_PATH, 'Controllers');
const HELPER_PATH = path.join(APP_PATH, 'Helpers');
const VIEW_PATH = path.join(APP_PATH, 'Views');
const KERNEL_PATH = path.join(process.cwd(), 'Kernel');
const CONFIG_PATH = path.join(APP_PATH, 'Config');

module.exports = {
   APP_PATH, CONTROLLER_PATH, HELPER_PATH, VIEW_PATH, KERNEL_PATH, CONFIG_PATH
};