let selectedCategory = 'Chapa';
let selectedPiezaId, categoryID, currentRol;
let firstTime = true;

$(function set(){
    getRol();
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
    print();
});

$('#table').change(function(){
    selectedPiezaId = $('#table :selected').first().val();
    console.log(selectedPiezaId);
    piezaInfo();

});

function piezaInfo(){
    $.ajax({
        url: "http://127.0.0.1:3307/piezasPOST",
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

$('#insertButton').click(function (e) {
    e.preventDefault();
    let myNombre = document.getElementById('nombreField').value;
    let myFabricante = document.getElementById('fabricanteField').value;
    insertPieza(myNombre, myFabricante);
});

$('#updateButton').click(function (e) {
    e.preventDefault();
    let myNombre = document.getElementById('nombreField').value;
    let myFabricante = document.getElementById('fabricanteField').value;
    updatePieza(myNombre, myFabricante);
});

$('#exitButton').click(function (e) {

    window.location = '../login.html';

});

//onClicking deleteButton
$('#deleteButton').click(function deletePieza(e) {
    e.preventDefault();
    $.ajax({
        url: "http://127.0.0.1:3307/deletePieza",
        async: true,
        type: "POST",
        data: JSON.stringify({
            id: selectedPiezaId
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (data, error) {
            //if the answer of restify is True, log in; if not, reload page.
            alert("La pieza " + data.nombre + " ha sido borrada correctamente");
            print();
        },
        error: function (data, error) {
            alert("please, try again");
        }
    });
});

function retrieveID(){
    $.ajax({
        url: "http://127.0.0.1:3307/tipoPiezasID",
        async: true,
        type: "POST",
        data: JSON.stringify({
            nombre: selectedCategory
        }),
        success: function(response){
            categoryID = response.results;
            console.log("aqui esta", categoryID);
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
    });
}

function insertPieza(myNombre, myFabricante){

    $.ajax({
        url: "http://127.0.0.1:3307/insertPieza",
        async: true,
        type: "POST",
        data: JSON.stringify({
            nombre: myNombre,
            fabricante: myFabricante,
            tipoPiezaNombre: selectedCategory
        }),

        success: function (data, error) {
            //if the answer of restify is True, log in; if not, reload page.
            alert("La pieza " + data.nombre + " ha sido añadida correctamente, id: " + data.idPieza);
            print();
        },
        error: function (data, error) {
            alert("please, try again");
        },

        contentType: "application/json; charset=utf-8",
        dataType: "json",
    });
}

function updatePieza(name, seller){
    $.ajax({
        url: "http://127.0.0.1:3307/updatePieza",
        async: true,
        type: "POST",
        data: JSON.stringify({
            id: selectedPiezaId,
            nombre: name,
            fabricante: seller
        }),

        success: function (data, error) {
            //if the answer of restify is True, log in; if not, reload page.
            alert("La pieza " + data.nombre + " ha sido modificada correctamente, id: " + data.idPieza);
            print();
        },
        error: function (data, error) {
            alert("please, try again");
        },

        contentType: "application/json; charset=utf-8",
        dataType: "json",
    });
}

function print(){
    getRol();
    $('#table').find('option').remove();
    if((currentRol === "invitado") === false){
        $.ajax({
            url: "http://127.0.0.1:3307/piezas",
            type: "GET",
            success: function(response){
                //show the response json fields in the list
                $('#table').append(`<option disabled><tr><th>ID&#9</th><th>NOMBRE&#9</th><th>FABRICANTE&#9</th><th>ID_TIPO</th></tr></option>`);
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
}

function getRol(){
    $.ajax({
        url: "http://127.0.0.1:3307/rol",
        type: "GET",
        success: function(response){
            currentRol = response.rol;
            if((currentRol === "administrador") === false){
                document.getElementById("insertButton").disabled = true;
                document.getElementById("deleteButton").disabled = true;
                document.getElementById("updateButton").disabled = true;
            }
            if(firstTime){
                print();
                firstTime = false;
            }
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
    });
}