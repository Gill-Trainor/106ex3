var items = [];


function fetchCatalog() {
    items = [
        {
            "code": "2234gg",
            "description": "MacBook",
            "price": 1999.99,
            "image": "https://cnet3.cbsistatic.com/img/yjrw7VgWV7a95AvK8Ym0Np4bFXY=/1200x675/2017/06/27/13484418-bfd9-41e2-8f2d-9b4afb072da8/apple-macbook-pro-15-inch-2017-14.jpg",
            "category": "Laptop",
            "stock": 2,
            "deliveryDays": 180,

        },
        {
            "code": "434h4j4",
            "description": "Apple TV",
            "price": 555.67,
            "image": "https://cnet2.cbsistatic.com/img/uGJbq-6v_8yFr2LG3fAi5MHLPUQ=/1200x675/2014/02/07/01fb6f29-f895-42f1-ba25-9180180bf1a3/Apple_TV_with_remote.jpg",
            "category": "TV",
            "stock": 300,
            "deliveryDays": 20,

        },

        {
            "code": "1aa234",
            "description": "iPhone",
            "price": 400.99,
            "image": "https://assets.newatlas.com/dims4/default/9e982f4/2147483647/strip/true/crop/1518x1013+141+0/resize/1160x774!/quality/90/?url=https%3A%2F%2Fassets.newatlas.com%2Farchive%2Fiphone-xs-rev-1.jpg",
            "category": "Phone",
            "stock": 300,
            "deliveryDays": 5,

        },

        {
            "code": "kjm68",
            "description": "AirPods",
            "price": 99.65,
            "image": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2019%2F10%2Fapple-airpods-3-leak-rumor-new-design-tech-wireless-earphones-1.jpg?q=75&w=800&cbr=1&fit=max",
            "category": "Accessories",
            "stock": 500,
            "deliveryDays": 1,

        },

    ];
}

function displayCatalog() {
    //travel the array
    for (var i = 0; i < items.length; i++) {
        //get the item
        var item = items[i];
        //draw the item on the DOM (html)
        drawItem(item);
    }
}


function drawItem(item) {
    //create the sintax
    var sntx =
        `<div class='item'> 
    <img src='${item.image}'>

    <label class='code'>${item.code}</label> 
    <label class='cat' >${item.category}</label>

    <label class='desc'>${item.description}</label> 

    <label class='price'>${item.price}</label>
    <button class= 'btn btn-sm btn-info'> + </button>
    </div>`;

    //get the element from the screen
    var container = $("#catalog");

    //append the sintax to the element
    container.append(sntx);
}

function search() {


    var text = $("#txtSearch").val().toLowerCase(); //get the text

    //clear previous results
    $("#catalog").html("");

    //travel array and only show items containing the text
    for (var i = 0; i < items.length; i++) {
        var item = items[i];

        //if the description contains the text,
        //OR the category contains the text,
        //OR the code is equal to the text,
        //OR the price is equal to the text
        //then show the item on the screen


        //if the title contains the text, then show the item on the screen
        if (item.description.toLowerCase().includes(text)
            || item.category.toLowerCase().includes(text)
            || item.code == text
            || item.price == text

        ) {
            drawItem(item);
        }
    }


}

function init() {
    console.log("This is catalog page!");


    //get data
    fetchCatalog();
    displayCatalog();

    //hook events
    $("#btnSearch").click(search);
    $("#txtSearch").keypress(function (e) {
        if (e.keyCode == 13) {
            search();
        }
    });

}
//HTTP Methods for next class
//HTTP status codes for next class

window.onload = init;