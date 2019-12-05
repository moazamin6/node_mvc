require('./kernel/core');
const http = require('http');
const fs = require('fs');



function edit() {
   console.log('this is edit function')
}

let server = http.createServer((req, res) => {

   let url = req.url;
   if (url === '/') {

      console.log(url)
   }
   console.log(url);
   res.writeHead(200, {'Content-Type': 'text/html'});
   fs.createReadStream('index.html').pipe(res);
   // let url = req.url;
   // let link = url.split('/');
   // let func = link[2]+"()";
   // // eval(func);
   // // console.log(global[func]);
   // res.write('<h1>' + req.url + '</h1>');
   // res.end()
});

server.listen(3100);
