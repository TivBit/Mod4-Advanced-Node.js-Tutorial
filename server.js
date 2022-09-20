//-------------------------------------------------------------------
//Course: SDEV 255
//Date: 20 Sept 2022
//Assignment:  Mod 4 Lab
//File: server.js
//Student: Nativida Barlow
//Instructor: Professor Troy Hamby
//IVY Tech Community College
//------------------------------------------------------------------->
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

//Set header content type
res.setHeader('Content-Type', 'text/html');

let path = './views/';
switch (req.url) {
  case '/':
    path += 'index.html';
    res.statusCode = 200;
    break;
  case '/about':
    path += 'about.html';
    res.statusCode = 200;
    break;
  case '/about-me':
    res.statusCode = 301;
    res.setHeader('Location', '/about');
    res.end();
    break;
  default:
    path += '404.html';
    res.statusCode = 404;
    break;
}

//send an html file
fs.readFile(path, (err, data) {
  if (err) {
    console.log(err);
    res.end();
  } else {
    //res.write(data);
    res.end();
  }
})

});

  //res.write('<head><link rel+"stylesheet" href="#"></head>');
  //res.write('<p>hello, nijas</p>');
  //res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000')
});


//getElementsByClassName('className')
