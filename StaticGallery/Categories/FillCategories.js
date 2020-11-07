



$(document).ready(function () {
    var d = new Date();
    var nocach = '20201107';
    
$.getJSON('Categories/Categories.json?nocache=' + nocach, function (json) {
    var catnav = document.getElementById('catBtns');
    var catHome = document.getElementById('categoriesHome');
    var cat = getParameterByName('cat');

    var Categories = json;

    for (var i = 0; i < Categories.length; i++) {
        var cl = "<div class='dropdown-divider'></div>";
        if (i == Categories.length - 1) {
            cl = '';
        }
        catnav.insertAdjacentHTML('beforeend', "<a href='Gallery.html?cat=" + i + "' class='dropdown-item text-right font-weight-bold'><i class='" + Categories[i].icon + "'></i> &nbsp;&nbsp;" + Categories[i].name + "</a>" + cl);

        try {
            catHome.insertAdjacentHTML('beforeend', "<div class='col text-center'><div  class='border border-primary p-3 my-2 rounded bg-light shadow-sm'><a class='text-decoration-none' href='Gallery.html?cat=" + i + "'> <i class='" + Categories[i].icon + " fa-7x'></i><hr /><h5 class=' font-weight-bold' style='overflow: hidden; white-space: nowrap;height: 36px; direction: rtl' >" + Categories[i].name + "</h5></a> </div></div>");
        } catch (e) {

        }
    }

    if (cat != '' && cat != null) {
        $("#carouselExampleInterval").hide();

        var cate_descrip = document.getElementById('cate_descrip');
        cate_descrip.insertAdjacentHTML('beforeend', "<div class='alert mt-3 pt-4 alert-primary shadow-sm border border-primary text-right' dir='rtl'><a class='h5 font-weight-bold d-block' href='Gallery.html?cat=" + cat + "'>المزيد عن قسم " + Categories[cat].name + "</a>  " + Categories[cat].description + "</div>");

        document.getElementById("titletag").innerText = document.getElementById("brandName").innerText + ' - ' + Categories[cat].name;

        $("a[href='Index.html']").removeClass('active');
        $("#navbarDropdown").addClass('active');

        //$("a[href='Gallery.html?cat=" + cat + "']").addClass('active');


        //$('#catBtns').append($("a[href='Gallery.html?cat=" + cat + "']"))



    }
});



});
