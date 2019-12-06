global.use = (lib) => {

   let r = '';
   if (lib.includes('Application')) {

      r = require(`${process.cwd()}/${lib}`);

   } else {
      r = require(lib)
   }
   return r;
};