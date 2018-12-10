let selectedCategory, selectedPiezaId;

function toSubmit(buttonValue){
    let category = document.getElementById('').elements[0].value;
    let pieza =  document.getElementById('').elements[1].value;
    let name =  document.getElementById('').elements[2].value;
    let seller =  document.getElementById('').elements[3].value
}

$(function set(){
    $.ajax({
        url: "http://127.0.0.1:3307/piezas",
        type: "GET",
        success: function(response){
            //show the response json fields in the list
            for(let i=0; i<response.results.length; i++){
                if(selectedCategory === response.results[i].idTipo.nombre){
                    const item = response.results[i];
                    $('#table').append(`<option><tr><td id="${item.id}">${item.id}&#9</td><td>${item.nombre}&#9</td><td>${item.fabricante}&#9</td><td>${item.idTipo.id_tipo}&#9</td></tr></option>`);
                }
            }
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
    });

    $.ajax({
        url: "http://127.0.0.1:3307/tipoPiezas",
        type: "GET",
        success: function(response){
            for(let i=0; i<response.results.length; i++) {
                const item = response.results[i];
                $("#category").append(`<option>${item.nombre}</option>`);
            }
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
    });
});

$('#category').change(function() {
    selectedCategory = $(":selected").val();
    $('#table').find('option').remove();
    print();
});

$('#table').change(function(){
    selectedPiezaId = $('#table :selected').val().substr(0,2);
    console.log(selectedPiezaId);
    something();

});

function print(){
    $.ajax({
        url: "http://127.0.0.1:3307/piezas",
        type: "GET",
        success: function(response){
            //show the response json fields in the list
            $('#table').append(`<option><tr><th>ID&#9</th><th>NOMBRE&#9</th><th>FABRICANTE&#9</th><th>ID_TIPO</th></tr></option>`);
            for(let i=0; i<response.results.length; i++){
                if(selectedCategory === response.results[i].idTipo.nombre){
                    const item = response.results[i];
                    $('#table').append(`<option><tr><td>${item.id}&#9</td><td>${item.nombre}&#9</td><td>${item.fabricante}&#9</td><td>${item.idTipo.id_tipo}&#9</td></tr></option>`);
                }
            }
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
    });
}

//Sending login data to restify
function something(){
    $.ajax({
        url: "http://127.0.0.1:3307/piezasd",
        async: true,
        type: "POST",
        data: JSON.stringify({
            id: selectedPiezaId
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (data, error) {
            //if the answer of restify is True, log in; if not, reload page.
            document.getElementById('nombreField').value = data.nombre;
            document.getElementById('fabricanteField').value = data.fabricante;
        },
        error: function (data, error) {
            alert("please, try again");
        }
    });
}