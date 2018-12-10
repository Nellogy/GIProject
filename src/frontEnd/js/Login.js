//Function to submit the login form
$('#mainButton').click(function login(e) {
    e.preventDefault();
    let user = document.getElementById("loginForm").elements[0].value;
    let password = document.getElementById("loginForm").elements[1].value;

    //Sending login data to restify
    let correct = $.ajax({
        url: "http://127.0.0.1:3307/login",
        async: true,
        type: "POST",
        data: JSON.stringify({
            usr: user,
            pss: password
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (data, error) {
            //if the answer of restify is True, log in; if not, reload page.
            if (!data.exist) {
                alert("Incorrect data");
                window.location = 'Login.html'; //nos quedamos en el login si el usuario y la pass no son correctos
            } else {
                alert("Logging in...");
                window.location = 'Piezas.html';
            }
        },

        error: function (data, error) {
            alert("please, try again");
        }
    })
});