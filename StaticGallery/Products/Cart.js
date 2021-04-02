function addToCart () {
  
    fillTable();
    $('.addToCart').click(function () {
        var Quantity = prompt("ادخل الكمية : ", "1");
        var Name = $(this).attr("name");

        var item = { name: Name, quantity: Quantity };

        localStorage.setItem("gipsy "+Name, JSON.stringify(item));
        
        fillTable();

    });


}
function removeItem(ele) {
    localStorage.removeItem($(ele).attr('name'));
    fillTable();


}


function fillTable() {
    $("#cartTable tbody").html("");



    var len = 0;

    for (var i in  localStorage) {
        if (localStorage.hasOwnProperty(i) && i.includes("gipsy")) {
        var pro = JSON.parse(localStorage.getItem(i));

            $("#cartTable tbody").append("<tr><td>" + pro.name + "</td> <td>" + pro.quantity + "</td><td><button class='btn btn-danger btn-block btn-sm' name='" + i + "' onclick='removeItem(this)'><i class='fas fa-times'></i></button></td> </tr>");

            len++;
        }
    }

    if (len == 0) {
        $("#cartTable tbody").append("<td colspan='3' class='text-center'>عربة التسوق فارغة</td>");
    }


    $('#counter').html(len);



}


function sendOrder() {        

    //alert('mmm');

    var msg = "";

    for (var i in localStorage) {
        if (localStorage.hasOwnProperty(i) && i.includes("gipsy")) {
            var pro = JSON.parse(localStorage.getItem(i));

            msg = msg + "[ " + pro.quantity + " : " + pro.name + " ]%0A"

        }
    }

    if (msg != "") {
        window.open("https://wa.me/201097154297?text=" + msg);
        localStorage.clear();
        fillTable();

    } else {
        alert("عربة التسوق فارغة");
    }


}