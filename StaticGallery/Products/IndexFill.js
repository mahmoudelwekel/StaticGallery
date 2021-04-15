$(document).ready(function () {
    var cat = getParameterByName('cat');
    var div = document.getElementById('pageRow');

    var d = new Date();
    var nocach = '20210415';

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
                    div.insertAdjacentHTML('beforeend', "<div class='col-md-3 pageelement py-3'> <div class='card hover border-primary '> <img class='img-fluid card-img-top categoryslider-img ' src='" + prolist[i].image[0] + "' alt='' style='height: 300px; object-fit: cover;' /> <div class='card-img-overlay text-primary p-0 mw-100' style='overflow:hidden'> <div class=' categoryslider-body p-3 text-left' style='display:none'> <a href='Product.html?i=" + i + "' class='btn btn-info rounded-circle shadow ic' ><i class='fas fa-info '></i></a> <a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[i].name + "' class='btn btn-success rounded-circle shadow ic mx-2' target='_blank'><i class='fas fa-bolt '></i></a> <button name='" + prolist[i].name + "' class='btn btn-primary addToCart rounded-circle shadow ic'><i class='fas fa-cart-plus '></i></button> </div> <div class='pb-4 w-100 px-3' style='position: absolute; bottom: 0 ;box-shadow:rgb(0 ,0, 0) 0px -10px 100px 125px;background-color:black;opacity:.70'> <div class=' font-weight-bold ' style='overflow: hidden; white-space: nowrap; direction: rtl'><a class='text-white' href='Product.html?i=" + i + "'>" + prolist[i].name + "</a></div> </div> </div> </div> </div>")
                }
            }
        }
        else {
            for (var i = 0; i < prolist.length; i++) {
                try {
                    div.insertAdjacentHTML('beforeend', "<div class='col-md-3 pageelement py-3'> <div class='card hover border-primary '> <img class='img-fluid card-img-top categoryslider-img ' src='" + prolist[i].image[0] + "' alt='' style='height: 300px; object-fit: cover;' /> <div class='card-img-overlay text-primary p-0 mw-100' style='overflow:hidden'> <div class=' categoryslider-body p-3 text-left' style='display:none'> <a href='Product.html?i=" + i + "' class='btn btn-info rounded-circle shadow ic' ><i class='fas fa-info '></i></a> <a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[i].name + "' class='btn btn-success rounded-circle shadow ic mx-2' target='_blank'><i class='fas fa-bolt '></i></a> <button name='" + prolist[i].name + "' class='btn btn-primary addToCart rounded-circle shadow ic'><i class='fas fa-cart-plus '></i></button> </div> <div class='pb-4 w-100 px-3' style='position: absolute; bottom: 0 ;box-shadow:rgb(0 ,0, 0) 0px -10px 100px 125px;background-color:black;opacity:.70'> <div class=' font-weight-bold ' style='overflow: hidden; white-space: nowrap; direction: rtl'><a class='text-white' href='Product.html?i=" + i + "'>" + prolist[i].name + "</a></div> </div> </div> </div> </div>")
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






