const Client = use('Kernel/Client');

class BaseController {
   constructor() {

      this.request = Client.request;
      this.response = Client.response;
   }

   loadView(view, data) {

      this.response.render(view, data);
   }
}

module.exports = BaseController;