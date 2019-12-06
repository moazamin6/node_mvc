require('./kernel/core');
const http = use('http');
const route = use('Application/Config/routes');
// console.log(route);

let server = http.createServer((req, res) => {   //create web server

   let method = req.method;
   let url = req.url;
   let controller = use('Application/Controllers/' + route.default_controller);
   let func = route.default_function;
   if (method === 'GET') {
      if (url === '/') {
         let ob = new controller();
         ob[func]();
      } else {
         controller = url.split('/')[1];
         let f = url.split('/')[0];
         console.log(controller, func);
         if (f === '') {
            controller = use('Application/Controllers/' + controller);
            let ob = new controller();
            ob[func]();
         }
      }
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

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')
