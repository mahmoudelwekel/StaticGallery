//البحث
    var value;
    var div = document.getElementById('pageRow');

    var d = new Date();
    var nocach = '20201108';


    $.getJSON('Info/Info.json?nocache=' + nocach, function (json) {
        var infolist = json;

        $.getJSON('Products/Products.json?nocache=' + nocach, function (json) {
            var prolist = json;
            $("#Text1").on("keyup", function () {
                value = $(this).val().toLowerCase();

                div.innerHTML = '';
                for (var i = 0 ; i < prolist.length ; i++) {
                    if (prolist[i]['name'].toLowerCase().includes(value) || prolist[i]['description'].toLowerCase().includes(value)) {
                        div.insertAdjacentHTML('beforeend', " <div class='col-md-3 pageelement py-3'> <div class='card hover border-primary'><img class='img-fluid card-img-top categoryslider-img ' src='" + prolist[i].image[0] + "' alt='' style='height: 220px; object-fit: cover;'/> <div class='card-body w-100 text-primary categoryslider-body' style='position: absolute; top: 49px; background-color: black; display: none; opacity: .95; overflow-y: scroll; max-height: 100%;'> </div><div class='card-footer '><div class='  font-weight-bold  card-title' style='overflow: hidden; white-space: nowrap; direction: rtl'>" + prolist[i].name + "</div><hr /><div class='btn-group w-100  btn-group-sm'> <a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[i].name + "' class='btn btn-outline-success font-weight-bold py-2' target='_blank'><i class='fas fa-phone'></i> اطلب الأن</a> <a href='Product.html?i=" + i + "' class='btn btn-outline-primary font-weight-bold py-2' ><i class='fas fa-info-circle'></i> التفاصيل</a> </div></div></div></div>")
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


                $('.paginationspages').paginate({
                    scope: $('.pageelement'),

                    // how many items per page
                    perPage: 12,
                });

            });
        });

    });




