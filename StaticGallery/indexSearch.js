//البحث

$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode == 13 && $("input[type=search]").is(":focus")) {
            event.preventDefault();
            return false;
        }
    });

    $("#Text1").on("keyup", function () {
        var value = $(this).val().toLowerCase();

        var reqproducts = new XMLHttpRequest();

        reqproducts.open('GET', 'Products/Products.json?nocache=' + (new Date()).getTime());
        reqproducts.onload = function () {
            var product = JSON.parse(reqproducts.responseText);
            FillProducts(product);
        };
        reqproducts.send();
        function FillProducts(products) {
            var div = document.getElementById('pageRow');
            var prolist = products;
            var reqinfo = new XMLHttpRequest();
            reqinfo.open('GET', 'Info/Info.json?nocache=' + (new Date()).getTime());
            reqinfo.onload = function () {
                var infolist = JSON.parse(reqinfo.responseText);
                var results = [];
                var searchField = "name";
                var searchVal = value;

                div.innerHTML = '';
                for (var i = 0 ; i < prolist.length ; i++) {
                    if (prolist[i][searchField].toLowerCase().includes(searchVal) || prolist[i]['description'].toLowerCase().includes(searchVal)) {
                        div.insertAdjacentHTML('beforeend', "<div class='col-md-4 pageelement py-2'><div class='card hover border-primary'><img class='img-fluid card-img-top categoryslider-img ' src='" + products[i].image + "' alt='' style='height: 300px; object-fit: cover;' /><a class='card-header btn btn-outline-primary font-weight-bold rounded-0 border-left-0 border-right-0' href='Product.html?i=" + i + "'><div style='overflow: hidden; white-space: nowrap; direction: rtl'>" + products[i].name + "</div></a><div class='card-body w-100 text-primary categoryslider-body' style='position: absolute; top: 0px; background-color: black; display: none; opacity: .95; overflow-y: scroll; max-height: 100%;'><h5 dir='rtl' class='card-title font-weight-bold text-right'>" + products[i].name + "</h5><p class='card-text text-right text-pre' dir='rtl'>" + products[i].description + "</p><p class='card-text text-right' dir='rtl'>السعر : " + products[i].price + "</p></div><a href='https://wa.me/2" + infolist[0].phone + "?text=" + products[i].name + "' class='btn btn-outline-primary card-footer font-weight-bold border-0 w-100' target='_blank'>اطلب الأن</a></div></div>")

                    }
                }
                $(".card").hover(function (event) {
                    $(".categoryslider-body", this).css("height", $(".categoryslider-img", this).height());
                    $(".categoryslider-body", this).fadeIn();
                });

                $(".card").mouseleave(function (event) {
                    $(".categoryslider-body", this).fadeOut();
                });
            };
            reqinfo.send();
        }

    });
});
