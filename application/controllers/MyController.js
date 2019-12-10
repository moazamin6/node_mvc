const BaseController = use('Kernel/BaseController');

class MyController extends BaseController {

   constructor() {

      super();
   }

   index(body) {

      console.log(body);
      let data = {
         name: 'moaz',
         func: () => 'function'
      };
      // this.response.send(data);
      return this.loadView('test', {data});
      // this.response.render('test');
      // this.response.send({msg: 'From index function', url: this.request.url, method: this.request.method})
   }

   get() {
      this.response.send({msg: 'From get function', url: this.request.url, method: this.request.method})
   }
}

module.exports = MyController;