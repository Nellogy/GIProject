//Function to submit the login form
function login(){
    let user = document.getElementById("loginForm").elements[0].value;
    let password = document.getElementById("loginForm").elements[1].value;

    //Sending login data to restify
    let correct = $.ajax({
        url: "http://localhost:3307",
        async: false,
        type: "POST",
        data: {usr: user, pss: password},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function(data, error){
            alert("please, try again");
        }
    });
    
    //if the answer of restify is True, log in; if not, reload page.
    if (!correct){
        document.loginForm.action = "Login.html"; //nos quedamos en el login si el usuario y la pass no son correctos
        alert("Incorrect data");
    } else {
        //nothing to do, default behavior
        alert("Logging in...");
    }

}