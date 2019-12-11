const BaseController = use('Kernel/BaseController');

class MyController extends BaseController {

   constructor() {

      super();
   }

   index(body) {

      let data = [];
      data['name'] = 'moaz';

      this.loadView('test',data)
   }

   get() {
      this.response.send({msg: 'From get function', url: this.request.url, method: this.request.method})
   }
}

module.exports = MyController;