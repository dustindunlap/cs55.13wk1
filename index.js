let myHttp = require("http");

let myServer = myHttp.createServer(
  function( myrequest, myresponse ) {
    console.log( myrequest.url );

    let mytext;
    
    if (myrequest.url === "/hey") {
      mytext = "Well hello there.";
    } else {
      mytext = "I don't know you.";
    }
    
    myresponse.writeHead( 200, { "Content-Type": "text/plain" } );

    myresponse.end( mytext + "\n" );
  }
);

myServer.listen( 8080,  "0.0.0.0");

console.log("server has started");
