global.use = (lib) => {

   let r = '';
   if (lib.includes('Application') || lib.includes('Kernel')) {

      r = require(`${process.cwd()}/${lib}`);

   } else {
      r = require(lib)
   }
   return r;
};

use('dotenv').config();