global.use = (lib) => {

   let r = '';
   if (lib.includes('Application')) {

      r = require(`${__dirname}/${lib}`);
   } else {
      r = require(lib)
   }
   return r;
};