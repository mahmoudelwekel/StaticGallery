$(document).ready(function () {
    var cat = getParameterByName('cat');
    var div = document.getElementById('pageRow');

    var d = new Date();
    var nocach = '20211005';

$.getJSON('Info/Info.json?nocache=' + nocach, function (json) {
    var infolist = json;

    $.getJSON('Products/Products.json?nocache=' +nocach, function (prolist) {

        var HomeSlider = document.getElementById('HomeSlider');

        //var slider = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"];

        var slider = ["0", "1", "21", "2", "3"];

        for (var i = 0; i < slider.length; i++) {
            var cl = '';
            if (i==0) {
                cl = 'active';
            }
            try {

            HomeSlider.insertAdjacentHTML('beforeend', " <div class='carousel-item "+cl+"' data-interval='3000'> <img src='" + prolist[slider[i]].image[0] + "' class='d-block w-100 fullimg'> <div class='carousel-caption bg-dark d-none '> <h4>" + prolist[slider[i]].name + "</h4> <hr /> <a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[slider[i]].name + "' class='btn btn-success font-weight-bold mx-2' target='_blank'><i class='fas fa-phone'></i> اطلب الأن</a> <a href='Product.html?i=" + slider[i] + "' class='btn btn-primary font-weight-bold mx-2'><i class='fas fa-info-circle'></i> التفاصيل</a> </div> </div>")
            } catch (e) {

            }
        }

        if (cat != '' && cat != null)
        {
            var results = [];
            var searchField = "category";
            var searchVal = cat;
            for (var i = 0 ; i < prolist.length ; i++) {
                if (prolist[i][searchField] == searchVal) {
                    div.insertAdjacentHTML('beforeend',
                        "    <div class='col py-3 pageelement filterElement' name='" + prolist[i].name.toLowerCase() + "'>                                                                                                                      " +
                        "        <div class='card hover border shadow-sm '>                                                                                                                         " +
                        "            <img class='card-img-top categoryslider-img rounded-top ' src='" + prolist[i].image[0] + "' alt='' style='height: 200px; object-fit: cover;' />              " +
                        "            <div class='card-body text-primary  categoryslider-body w-100' style='display:none;position:absolute;top:125px'>                                               " +
                        "                <button name='" + prolist[i].name + "' class='btn btn-primary   addToCart rounded-circle shadow ic'><i class='fas fa-cart-plus '></i></button>                                    " +
                        "                <a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[i].name + "' class='btn btn-success rounded-circle shadow ic mx-2' target='_blank'><i class='fas fa-bolt '></i></a>                                         " +
                        "                <a href='Product.html?i=" + i + "' class='btn btn-secondary text-white rounded-circle shadow ic'><i class='fas fa-info '></i></a>                                                 " +
                        "            </div>                                                                                                                                                         " +
                        "            <div class='card-body text-right'>                                                                                                                             " +
                        "                <h6 class='card-title font-weight-bold no-text-wrap'>                                                                                                      " +
                        "                    <a class=' text-decoration-none d-block' href='Product.html?i=" + i + "' title='Name'>" + prolist[i].name + "</a>                                                           " +
                        "                </h6>                                                                                                                                                      " +
                        "                <p class='card-text '>                                                                                                                                  " +
                        "<strong>" + prolist[i].price + "</strong>                                                                                                                     " +
                        "                </p>                                                                                                                                                       " +
                        "            </div>                                                                                                                                                         " +
                        "        </div>                                                                                                                                                             " +
                        "    </div>                                                                                                                                                                 "
                    );
                }
            }
        }
        else {
            for (var i = 0; i < prolist.length; i++) {
                try {
                    div.insertAdjacentHTML('beforeend',
                        "    <div class='col py-3 pageelement filterElement' name='" + prolist[i].name.toLowerCase() + "'>                                                                                                                      " +
                        "        <div class='card hover border shadow-sm '>                                                                                                                         " +
                        "            <img class='card-img-top categoryslider-img rounded-top ' src='" + prolist[i].image[0] + "' alt='' style='height: 200px; object-fit: cover;' />              " +
                        "            <div class='card-body text-primary  categoryslider-body w-100' style='display:none;position:absolute;top:125px'>                                               " +
                        "                <button name='" + prolist[i].name + "' class='btn btn-primary   addToCart rounded-circle shadow ic'><i class='fas fa-cart-plus '></i></button>                                    " +
                        "                <a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[i].name + "' class='btn btn-success rounded-circle shadow ic mx-2' target='_blank'><i class='fas fa-bolt '></i></a>                                         " +
                        "                <a href='Product.html?i=" + i + "' class='btn btn-secondary text-white rounded-circle shadow ic'><i class='fas fa-info '></i></a>                                                 " +
                        "            </div>                                                                                                                                                         " +
                        "            <div class='card-body text-right'>                                                                                                                             " +
                        "                <h6 class='card-title font-weight-bold no-text-wrap'>                                                                                                      " +
                        "                    <a class=' text-decoration-none d-block' href='Product.html?i=" + i + "' title='Name'>" + prolist[i].name + "</a>                                                           " +
                        "                </h6>                                                                                                                                                      " +
                        "                <p class='card-text '>                                                                                                                                  " +
                        "<strong>" + prolist[i].price + "</strong>                                                                                                                     " +
                        "                </p>                                                                                                                                                       " +
                        "            </div>                                                                                                                                                         " +
                        "        </div>                                                                                                                                                             " +
                        "    </div>                                                                                                                                                                 "
                    );
                        } catch (e) {

                }
            }
        }

        addToCart();


        $(".card").hover(function (event) {
            //$(".categoryslider-body", this).css("height", $(".categoryslider-img", this).height());
            $(".categoryslider-body", this).fadeIn();
        });

        $(".card").mouseleave(function (event) {
            $(".categoryslider-body", this).fadeOut();
        });

        //$(".card").hover(function (event)
        //{
        //    $(".categoryslider-body", this).css("height", $(".categoryslider-img", this).height());
        //    $(".categoryslider-body", this).fadeIn();
        //});

        //$(".card").mouseleave(function (event)
        //{
        //    $(".categoryslider-body", this).fadeOut();
        //});
        try {
            $('.paginationspages').paginate({
                scope: $('.pageelement'),

                // how many items per page
                perPage: 12,
            });

        } catch (e) {

        }

    });
});


});






