//البحث
$(document).ready(function () {
    var value;
    var div = document.getElementById('pageRow');

    var d = new Date();
    var nocach = d.getFullYear() + d.getMonth() + d.getDay() + d.getHours() + d.getMinutes();


    $.getJSON('Info/Info.json?nocache=' + nocach, function (json) {
        var infolist = json;

        $.getJSON('Products/Products.json?nocache=' + nocach, function (json) {
            var prolist = json;
            $("#Text1").on("keyup", function () {
                value = $(this).val().toLowerCase();

                div.innerHTML = '';
                for (var i = 0 ; i < prolist.length ; i++) {
                    if (prolist[i]['name'].toLowerCase().includes(value) || prolist[i]['description'].toLowerCase().includes(value)) {
                        div.insertAdjacentHTML('beforeend', " <div class='col-md-4 pageelement py-2'> <div class='card hover border-primary'> <div class='card-header'> <div style='overflow: hidden; white-space: nowrap; direction: rtl'>" + prolist[i].name + "</div></div><img class='img-fluid card-img-top categoryslider-img ' src='" + prolist[i].image[0] + "' alt='' style='height: 250px; object-fit: cover;'/> <div class='card-body w-100 text-primary categoryslider-body' style='position: absolute; top: 49px; background-color: black; display: none; opacity: .95; overflow-y: scroll; max-height: 100%;'> <h5 dir='rtl' class='card-title font-weight-bold text-right'>" + prolist[i].name + "</h5> <p class='card-text text-right text-pre' dir='rtl'>" + prolist[i].description + "</p><p class='card-text text-right' dir='rtl'>السعر : " + prolist[i].price + "</p></div><div class='card-footer '> <div class='row'> <a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[i].name + "' class='btn btn-outline-success font-weight-bold col mx-2' target='_blank'><i class='fas fa-phone'></i> اطلب الأن</a> <a href='Product.html?i=" + i + "' class='btn btn-outline-primary font-weight-bold col mx-2'><i class='fas fa-info-circle'></i> التفاصيل</a> </div></div></div></div>")
                    }
                }
                $(".card").hover(function (event) {
                    $(".categoryslider-body", this).css("height", $(".categoryslider-img", this).height());
                    $(".categoryslider-body", this).fadeIn();
                });

                $(".card").mouseleave(function (event) {
                    $(".categoryslider-body", this).fadeOut();
                });

                $('.paginationspages').data('paginate').kill()


                $('.paginationspages').paginate({
                    scope: $('.pageelement'),

                    // how many items per page
                    perPage: 12,
                });

            });
        });

    });



});

