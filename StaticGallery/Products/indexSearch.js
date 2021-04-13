//البحث
$(document).ready(function () {
    var value;
    var div = document.getElementById('pageRow');

    var d = new Date();
    var nocach = '202104122';


    $.getJSON('Info/Info.json?nocache=' + nocach, function (json) {
        var infolist = json;

        $.getJSON('Products/Products.json?nocache=' + nocach, function (json) {
            var prolist = json;
            $("#Text1").on("keyup", function () {
                value = $(this).val().toLowerCase();

                div.innerHTML = '';
                for (var i = 0 ; i < prolist.length ; i++) {
                    if (prolist[i]['name'].toLowerCase().includes(value) || prolist[i]['description'].toLowerCase().includes(value)) {
                        div.insertAdjacentHTML('beforeend', "<div class='col-md-3 pageelement py-3'>                        <div class= 'card hover border-primary ' >                        <img class='img-fluid card-img-top categoryslider-img ' src='" + prolist[i].image[0] + "' alt='' style='height: 300px; object-fit: cover;' />                        <div class='card-img-overlay text-primary  p-0 mw-100' style='overflow:hidden'>                            <div class=' categoryslider-body' style='display:none'>                                <div class='d-flex justify-content-between p-3 '>                                    <a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[i].name + "' class='btn btn-success rounded-circle shadow ic' target='_blank'><i class='fas fa-bolt '></i></a>                                    <button name='" + prolist[i].name + "' class='btn btn-primary   addToCart rounded-circle shadow ic'><i class='fas fa-cart-plus '></i></button>                                </div>                            </div>                            <div class='pb-4 w-100 px-3' style='position: absolute; bottom: 0 ;box-shadow:rgb(0 ,0, 0) 0px -15px 20px 20px;background-color:black;opacity:.70'>                                <div class=' font-weight-bold text-white' style='overflow: hidden; white-space: nowrap; direction: rtl'><a class=' text-white' href='Product.html?i=" + i + "'>" + prolist[i].name + "</a></div>                            </div>                        </div>                        </div >                    </div >")
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

