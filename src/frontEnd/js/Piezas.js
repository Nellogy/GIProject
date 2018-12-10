function toSubmit(buttonValue){
    let category = document.getElementById("loginForm").elements[0].value;
    let pieza =  document.getElementById("loginForm").elements[1].value;
    let name =  document.getElementById("loginForm").elements[2].value;
    let seller =  document.getElementById("loginForm").elements[3].value

    $.ajax({
        url: "http://127.0.0.1:3307",
        type: "GET",
        data: "",
        success: function(response){
            //show the response json fields in the list
            $.each(response, function(i, response){
                $("#table").append("<option><tr><td>").append(response.id).append("</td>").
                append("<td>").append(response.nombre).append("</td>").
                append("<td>").append(response.fabricante).append("</td>").
                append("<td>").append(response.id_tipo).append("</td></tr></option>");
            });
        },
        dataType: "json"
    })
}
