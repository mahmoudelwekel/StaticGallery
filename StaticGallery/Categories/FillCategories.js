$(document).ready(function () {
    var d = new Date();
    var nocach = d.getFullYear() + d.getMonth() + d.getDay() + d.getHours() + d.getMinutes();
    
$.getJSON('Categories/Categories.json?nocache=' + nocach, function (json) {
    var catnav = document.getElementById('catBtns');
    var cat = getParameterByName('cat');

    var Categories = json;

    for (var i = 0; i < Categories.length; i++) {
        var cl = "<div class='dropdown-divider'></div>";
        if (i == Categories.length-1) {
            cl = '';
        }
        catnav.insertAdjacentHTML('beforeend', "<a href='Index.html?cat=" + i + "' class='dropdown-item text-right font-weight-bold'>" + Categories[i].icon + "&nbsp;&nbsp;" + Categories[i].name + "</a>"+cl)
    }

    if (cat != '' && cat != null) {
        $("#carouselExampleInterval").hide();

        var cate_descrip = document.getElementById('cate_descrip');
        cate_descrip.insertAdjacentHTML('beforeend', "<div class='alert mt-3 pt-4 alert-primary shadow-sm border border-primary text-right' dir='rtl'><a class='h5 font-weight-bold d-block' href='index.html?cat=" + cat + "'>المزيد عن قسم " + Categories[cat].name + "</a>  " + Categories[cat].description + "</div>");

        document.getElementById("titletag").innerText = document.getElementById("brandName").innerText + ' - ' + Categories[cat].name;

        $("a[href='Index.html']").removeClass('active');
        $("#navbarDropdown").addClass('active');

        //$("a[href='Index.html?cat=" + cat + "']").addClass('active');


        //$('#catBtns').append($("a[href='Index.html?cat=" + cat + "']"))



    }
});



});
