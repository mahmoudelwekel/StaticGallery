$(document).ready(function () {
    var cat = getParameterByName('cat');
    var div = document.getElementById('pageRow');

    var d = new Date();
    var nocach = d.getFullYear() + d.getMonth() + d.getDay() + d.getHours() + d.getMinutes();

$.getJSON('Info/Info.json?nocache=' + nocach, function (json) {
    var infolist = json;

    $.getJSON('Products/Products.json?nocache=' +nocach, function (prolist) {

        var HomeSlider = document.getElementById('HomeSlider');

        //var slider = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"];

        var slider = ["0", "1", "21", "2", "3"];

        //HomeSlider.insertAdjacentHTML('beforeend', " <div class='carousel-item active' data-interval='3000'> <img src='" + infolist[0].cover + "' class='d-block w-100 fullimg'> <div class='carousel-caption bg-dark '> <h4>" + infolist[0].about + "</h4> <hr /> <a href='https://wa.me/2" + infolist[0].phone + "?text=25% Offer' class='btn btn-success font-weight-bold mx-2' target='_blank'><i class='fas fa-phone'></i> اتصل الان و احصل على خصم 25%</a>  </div> </div>")

        for (var i = 0; i < slider.length; i++) {
            var cl = '';
            if (i==0) {
                cl = 'active';
            }
            HomeSlider.insertAdjacentHTML('beforeend', " <div class='carousel-item "+cl+"' data-interval='3000'> <img src='" + prolist[slider[i]].image[0] + "' class='d-block w-100 fullimg'> <div class='carousel-caption bg-dark '> <h4>" + prolist[slider[i]].name + "</h4> <hr /> <a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[slider[i]].name + "' class='btn btn-success font-weight-bold mx-2' target='_blank'><i class='fas fa-phone'></i> اطلب الأن</a> <a href='Product.html?i=" + slider[i] + "' class='btn btn-primary font-weight-bold mx-2'><i class='fas fa-info-circle'></i> التفاصيل</a> </div> </div>")
        }

        if (cat != '' && cat != null)
        {
            var results = [];
            var searchField = "category";
            var searchVal = cat;
            for (var i = 0 ; i < prolist.length ; i++) {
                if (prolist[i][searchField] == searchVal) {
                    div.insertAdjacentHTML('beforeend', " <div class='col-md-4 pageelement py-3'> <div class='card hover border-primary'> <div class='card-header'> <div style='overflow: hidden; white-space: nowrap; direction: rtl'>" + prolist[i].name + "</div></div><img class='img-fluid card-img-top categoryslider-img ' src='" + prolist[i].image[0] + "' alt='' style='height: 250px; object-fit: cover;'/> <div class='card-body w-100 text-primary categoryslider-body' style='position: absolute; top: 49px; background-color: black; display: none; opacity: .95; overflow-y: scroll; max-height: 100%;'> </div><div class='card-footer '> <div class='row'> <a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[i].name + "' class='btn btn-outline-success font-weight-bold col mx-2' target='_blank'><i class='fas fa-phone'></i> اطلب الأن</a> <a href='Product.html?i=" + i + "' class='btn btn-outline-primary font-weight-bold col mx-2' ><i class='fas fa-info-circle'></i> التفاصيل</a> </div></div></div></div>")

                }
            }
        }
        else {
            for (var i = 0; i < prolist.length; i++) {
                div.insertAdjacentHTML('beforeend', " <div class='col-md-4 pageelement py-3'> <div class='card hover border-primary'> <div class='card-header'> <div style='overflow: hidden; white-space: nowrap; direction: rtl'>" + prolist[i].name + "</div></div><img class='img-fluid card-img-top categoryslider-img ' src='" + prolist[i].image[0] + "' alt='' style='height: 250px; object-fit: cover;'/> <div class='card-body w-100 text-primary categoryslider-body' style='position: absolute; top: 49px; background-color: black; display: none; opacity: .95; overflow-y: scroll; max-height: 100%;'> </div><div class='card-footer '> <div class='row'> <a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[i].name + "' class='btn btn-outline-success font-weight-bold col mx-2' target='_blank'><i class='fas fa-phone'></i> اطلب الأن</a> <a href='Product.html?i=" + i + "' class='btn btn-outline-primary font-weight-bold col mx-2' ><i class='fas fa-info-circle'></i> التفاصيل</a> </div></div></div></div>")
            }
        }



        //$(".card").hover(function (event)
        //{
        //    $(".categoryslider-body", this).css("height", $(".categoryslider-img", this).height());
        //    $(".categoryslider-body", this).fadeIn();
        //});

        //$(".card").mouseleave(function (event)
        //{
        //    $(".categoryslider-body", this).fadeOut();
        //});

        $('.paginationspages').paginate({
            scope: $('.pageelement'),

            // how many items per page
            perPage: 12,
        });

    });
});


});



function getParameterByName(name, url)
{
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}






