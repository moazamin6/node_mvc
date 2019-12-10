require('./kernel/core');
const path = use('path');
const http = use('http');

const constant = use('Kernel/constants');
const route = use('Application/Config/routes');
// console.log(route);


let server = http.createServer((req, res) => {   //create web server

   // let method = req.method;
   let url = req.url;
   // console.log(url);
   // console.log(url.split('/')[0]);
   // console.log(url.split('/')[1]);
   // console.log(url.split('/')[2]);

   let controller = '';
   let controller_function = route.default_function;
   if (url === '/') {

      controller = use(path.join('Application/Controllers', route.default_controller));
      let obj = new controller();
      obj[controller_function]();
   } else {

      controller = use(path.join('Application/Controllers', url.split('/')[1]));
      let func = url.split('/')[2];
      if (func !== undefined) {
         controller_function = func;
      }

      let obj = new controller();
      obj[controller_function]();
   }


   // if (req.url === '/') { //check the URL of the current request
   //
   //    // set response header
   //    res.writeHead(200, {'Content-Type': 'application/json'});
   //    // res.setHeader('Content-Type', 'application/json');
   //    // set response content
   //    //res.write(res.toJSON());
   //    // console.log(req)
   //    res.end(JSON.stringify(req.method));
   //
   // }
   // else if (req.url === "/student") {
   //
   //    res.writeHead(200, {'Content-Type': 'text/html'});
   //    res.write('<html><body><p>This is student Page.</p></body></html>');
   //    res.end();
   //
   // }
   // else if (req.url === "/admin") {
   //
   //    res.writeHead(200, {'Content-Type': 'text/html'});
   //    res.write('<html><body><p>This is admin Page.</p></body></html>');
   //    res.end();
   //
   // }
   // else{
   //    res.end('Invalid Request!');
   // }


});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..');
