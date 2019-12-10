class Bootstrap {
   constructor() {
      this.msg = 'constructor/';
   }

   initRouting() {
      this.msg += 'first_method/';
      return this;
   }

   initTemplating() {
      this.msg += 'second_method/';
      return this;
   }
}

module.exports = Bootstrap;