//البحث
$(document).ready(function () {
    var value;
    var div = document.getElementById('pageRow');

    var d = new Date();
    var nocach = '20210402';


    $.getJSON('Info/Info.json?nocache=' + nocach, function (json) {
        var infolist = json;

        $.getJSON('Products/Products.json?nocache=' + nocach, function (json) {
            var prolist = json;
            $("#Text1").on("keyup", function () {
                value = $(this).val().toLowerCase();

                div.innerHTML = '';
                for (var i = 0 ; i < prolist.length ; i++) {
                    if (prolist[i]['name'].toLowerCase().includes(value) || prolist[i]['description'].toLowerCase().includes(value)) {
                        div.insertAdjacentHTML('beforeend', "<div class='col-md-3 pageelement py-3'> <div class='card hover border-primary '> <img class='img-fluid card-img-top categoryslider-img ' src='" + prolist[i].image[0] + "' alt='' style='height: 220px; object-fit: cover;' /> <div class='card-body w-100 text-primary categoryslider-body' style='position: absolute; top: 49px; background-color: black; display: none; opacity: .95; overflow-y: scroll; max-height: 100%;'> </div> <div class='card-footer '> <div class=' font-weight-bold ' style='overflow: hidden; white-space: nowrap; direction: rtl'><a href='Product.html?i=" + i + "'>" + prolist[i].name + "</a></div> </div> <div class='card-footer btn-group w-100 btn-group-sm p-0 rounded-0 rounded-bottom'> <a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[i].name + "' class='btn btn-success font-weight-bold py-2 rounded-0 rounded-bottom' target='_blank'><i class='fas fa-bolt fa-lg'></i></a> <button name='" + prolist[i].name + "' class='btn btn-primary font-weight-bold py-2 addToCart rounded-0 rounded-bottom'><i class='fas fa-cart-plus fa-lg'></i></button> </div> </div> </div>")
                    }
                }
                //$(".card").hover(function (event) {
                //    $(".categoryslider-body", this).css("height", $(".categoryslider-img", this).height());
                //    $(".categoryslider-body", this).fadeIn();
                //});

                //$(".card").mouseleave(function (event) {
                //    $(".categoryslider-body", this).fadeOut();
                //});

                $('.paginationspages').data('paginate').kill()

                addToCart();


                $('.paginationspages').paginate({
                    scope: $('.pageelement'),

                    // how many items per page
                    perPage: 12,
                });

            });
        });

    });



});

