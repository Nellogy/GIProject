/*
-- Esta parte son pruebas con restify que no terminan de funcionar
const restify = require('restify');
const server = restify.createServer();

server.listen(3307,'127.0.0.1');

server.use(restify.plugins.bodyParser()); //to parse the info to post it
server.post('/my_post', postHandler);

//handling all the post made to restify (usefull in the back-end to retrieve the data)
function postHandler(req, res, next) {
    //Get the first name value from the POSTED data
    let firstName = "cancer";

    //Send back the value they posted
    res.send("You posted something" + firstName);
    next();

    //get the info
    console.log(req.body);
    next();
}
*/
//Function to submit the login form
function login(){
    let correct = true;
    let user = document.getElementById("loginForm").elements[0].value;
    let password = document.getElementById("loginForm").elements[1].value;
    /*
    if (login incorrecto){
        document.loginForm.action = "Login.html" //nos quedamos en el login si el usuario y la pass no son correctos
        alert("Incorrect data");
    } else {
        //nothing to do, default behavior
        alert("Logging in...");
    }
    */
}