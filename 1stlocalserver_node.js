/* bare minimum node code to start a server, 
run it on terminal and then open through browser calling the port assigned
in this case 8080, using localhost:8080 */


/*CALLING IT http because it 'requires' http to transfer data over the 
internet, tranfer request and response.*/
var http = require('http');

/*we are calling our var (http) and creating a server through a function that
requires 2 parameters, request and respond. responses have numbers ie 200 (everything is fine)
returning text and html (meaning website), and get that line of text in response.*/

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end('<h1>Hello World! My name is Gaby Rollins</h1>');

	//tells which port to access
	
}).listen(8080);
