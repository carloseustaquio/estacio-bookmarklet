const http = require('http');
const port = 4000;
// const bookmarklet = require('./bookmarklet')

const server = http.createServer(function(req, res){
  // res.send(bookmarklet)
  res.end();
})


server.listen(port, function(error) {
  if(error){
    console.log("Ocorreu um erro. ", error)
  }
  else {
    console.log("Ouvindo na porta: ", port)

  }
})