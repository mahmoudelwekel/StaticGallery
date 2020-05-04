﻿var reqinfo = new XMLHttpRequest();
reqinfo.open('GET', 'Info/Info.json?nocache=' + (new Date()).getTime());
reqinfo.onload = function () {
    var infolist = JSON.parse(reqinfo.responseText);
    $('#call').attr('href', 'Tel:' + infolist[0].phone);
    $('#whats').attr('href', 'https://wa.me/2' + infolist[0].phone);
    $('#logo').attr('src', infolist[0].logo);
    $('#tablogo').attr('href', infolist[0].logo);
    document.getElementById("placename").innerText = infolist[0].name;
    document.getElementById("placeinfo").insertAdjacentHTML('beforeend', infolist[0].about);


    var reqCategories = new XMLHttpRequest();
    reqCategories.open('GET', 'Categories/Categories.json?nocache=' + (new Date()).getTime());
    reqCategories.onload = function () {
        var Categories = JSON.parse(reqCategories.responseText);


        var reqproducts = new XMLHttpRequest();
        reqproducts.open('GET', 'Products/Products.json?nocache=' + (new Date()).getTime());
        reqproducts.onload = function () {
            var product = JSON.parse(reqproducts.responseText);
            FillProducts(product, infolist, Categories);
        };
        reqproducts.send();

    };
    reqCategories.send();


};
reqinfo.send();




function FillProducts(products, infolist, Categories) {
    var div = document.getElementById('pageRow');
    var prolist = products;
    var i = getParameterByName('i');
    document.getElementById("titletag").innerText = infolist[0].name + ' - ' + products[i].name;
    $('meta[name=description]').attr('content', infolist[0].name + ' - ' + products[i].name + ' - ' + infolist[0].about);

    div.insertAdjacentHTML('beforeend', "<div class='card shadow-sm text-right'><div class='row no-gutters'><div class='col-md-6 p-3'><a data-toggle='modal' href='#' data-target='#exampleModal'><img class='card-img img-fluid h-100 w-100 ' src='" + products[i].image + "' alt='' style='object-fit: contain;' /></a></div><div class='col-md-6'><div class='card-body'><h4 class='card-title font-weight-bold' dir='rtl'>" + products[i].name + "</h4><hr/><p class='card-text' dir='rtl'>" + products[i].description + "</p><hr/><p class='card-text' dir='rtl'>السعر : " + products[i].price + "</p><a href='https://wa.me/2" + infolist[0].phone + "?text=" + products[i].name + "' class='btn btn-primary font-weight-bold w-100' target='_blank'>اطلب الأن</a><hr /><p class='card-text' dir='rtl'><a class='h5 font-weight-bold ' href='index.html?cat=" + products[i].category + "'>المزيد عن قسم " + Categories[products[i].category].name + "</a></p><p class='card-text text-pre' dir='rtl'>" + Categories[products[i].category].description + "</p></div></div></div></div><div class='modal pt-0 fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'><div class='modal-dialog modal-dialog-centered modal-lg' role='document'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body p-0'><img class='img-fluid h-100 w-100' src='" + products[i].image + "' alt='' /></div></div></div></div>");

    $(".modal").appendTo("body");

}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}