$(document).ready(function () {
    var d = new Date();
    var nocach = d.getFullYear() + d.getMonth() + d.getDay() + d.getHours() + d.getMinutes();
    
$.getJSON('Categories/Categories.json?nocache=' + nocach, function (json) {
    var catnav = document.getElementById('catBtns');
    var cat = getParameterByName('cat');

    var Categories = json;

    for (var i = 0; i < Categories.length; i++) {
        catnav.insertAdjacentHTML('beforeend', "  <a class='border'></a><a href='Index.html?cat=" + i + "' class='nav-item nav-link  font-weight-bold'>" + Categories[i].name + "</a>")
    }

    if (cat != '' && cat != null) {
        var cate_descrip = document.getElementById('cate_descrip');
        cate_descrip.insertAdjacentHTML('beforeend', "<div class='alert mt-3 pt-4 alert-primary shadow-sm border border-primary text-right' dir='rtl'><a class='h5 font-weight-bold d-block' href='index.html?cat=" + cat + "'>المزيد عن قسم " + Categories[cat].name + "</a>  " + Categories[cat].description + "</div>");


        //$('#catBtns').append($("a[href='Index.html?cat=" + cat + "']"))

        $("a[href='Index.html']").removeClass('active');
        $("a[href='Index.html?cat=" + cat + "']").addClass('active');
    }
});



});
