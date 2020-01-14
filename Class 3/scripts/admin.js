var serverURL = "http://restclass.azurewebsites.net/API/";

function Item(code, desc, price, image, category, stock, deliveryDays) {
    this.code = code;
    this.description = desc;
    this.price = price;
    this.image = image;
    this.category = category;
    this.stock = stock;
    this.deliveryDays = deliveryDays;
    this.user = "Gill";
}

function saveItem() {
    //get the values
    var code = $("#txtCode").val();
    var description = $("#txtDescription").val();
    var price = $("#txtPrice").val()
    var image = $("#txtImage").val();
    var category = $("#txtCategory").val();
    var stock = $("#txtStock").val();
    var delivery = $("#txtDelivery").val();

var theItem = new Item(code, description, price, image, category, stock, delivery);
console.log(theItem);

$.ajax({

});

}
// create an object


// send the object to the server


function testAjax() {

    //Async
    //Javascript
    //And
    //XML com JSON

    $.ajax({
        url: serverURL + "test", //"test2" if you want to test error
        type: 'GET',
        success: function (res) {
            console.log("Payment finished");
            console.log("Server says", res);
        },
        error: function (err) {
            console.log("Payment error");
            console.log("Error ocurred", err);
        }
    });
    console.log("Order complete, payment accepted");
    console.log("NOT FINISHED YET");
}

function init() {
    console.log("This is Admin page!!");

    //retrief initial data

    //hook events
    $("#btnSave").click(saveItem);

}

window.onload = init;