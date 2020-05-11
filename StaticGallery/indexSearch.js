//البحث
var prolist, infolist, value;

$(document).ready(function () {
    $.getJSON('Products/Products.json?nocache=' + (new Date()).getMinutes(), function (json) {
        prolist = json;
    });

    $.getJSON('Info/Info.json?nocache=' + (new Date()).getMinutes(), function (json) {
        infolist = json;
    });

    var div = document.getElementById('pageRow');

    $("#Text1").on("keyup", function () {
        value = $(this).val().toLowerCase();

        div.innerHTML = '';
        for (var i = 0 ; i < prolist.length ; i++) {
            if (prolist[i]['name'].toLowerCase().includes(value) || prolist[i]['description'].toLowerCase().includes(value)) {
                div.insertAdjacentHTML('beforeend', "<div class='col-md-4 pageelement py-2'><div class='card hover border-primary'><img class='img-fluid card-img-top categoryslider-img ' src='" + prolist[i].image + "' alt='' style='height: 300px; object-fit: cover;' /><a class='card-header btn btn-outline-primary font-weight-bold rounded-0 border-left-0 border-right-0' href='Product.html?i=" + i + "'><div style='overflow: hidden; white-space: nowrap; direction: rtl'>" + prolist[i].name + "</div></a><div class='card-body w-100 text-primary categoryslider-body' style='position: absolute; top: 0px; background-color: black; display: none; opacity: .95; overflow-y: scroll; max-height: 100%;'><h5 dir='rtl' class='card-title font-weight-bold text-right'>" + prolist[i].name + "</h5><p class='card-text text-right text-pre' dir='rtl'>" + prolist[i].description + "</p><p class='card-text text-right' dir='rtl'>السعر : " + prolist[i].price + "</p></div><a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[i].name + "' class='btn btn-outline-primary card-footer font-weight-bold border-0 w-100' target='_blank'>اطلب الأن</a></div></div>")
            }
        }
        $(".card").hover(function (event) {
            $(".categoryslider-body", this).css("height", $(".categoryslider-img", this).height());
            $(".categoryslider-body", this).fadeIn();
        });

        $(".card").mouseleave(function (event) {
            $(".categoryslider-body", this).fadeOut();
        });
    });

});

