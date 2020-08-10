$(document).ready(function () {
    var cat = getParameterByName('cat');
    var div = document.getElementById('pageRow');

    var d = new Date();
    var nocach = d.getFullYear() + d.getMonth() + d.getDay() + d.getHours() + d.getMinutes();

$.getJSON('Info/Info.json?nocache=' + nocach, function (json) {
    var infolist = json;

    $.getJSON('Products/Products.json?nocache=' +nocach, function (prolist) {
        var prolist = prolist;
        

        if (cat != '' && cat != null)
        {
            var results = [];
            var searchField = "category";
            var searchVal = cat;
            for (var i = 0 ; i < prolist.length ; i++) {
                if (prolist[i][searchField] == searchVal) {
                    div.insertAdjacentHTML('beforeend', " <div class='col-md-4 pageelement py-3'> <div class='card hover border-primary'> <div class='card-header'> <div style='overflow: hidden; white-space: nowrap; direction: rtl'>" + prolist[i].name + "</div></div><img class='img-fluid card-img-top categoryslider-img ' src='" + prolist[i].image[0] + "' alt='' style='height: 250px; object-fit: cover;'/> <div class='card-body w-100 text-primary categoryslider-body' style='position: absolute; top: 49px; background-color: black; display: none; opacity: .95; overflow-y: scroll; max-height: 100%;'> <h5 dir='rtl' class='card-title font-weight-bold text-right'>" + prolist[i].name + "</h5> <p class='card-text text-right text-pre' dir='rtl'>" + prolist[i].description + "</p><p class='card-text text-right' dir='rtl'>السعر : " + prolist[i].price + "</p></div><div class='card-footer '> <div class='row'> <a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[i].name + "' class='btn btn-outline-success font-weight-bold col mx-2' target='_blank'><i class='fas fa-phone'></i> اطلب الأن</a> <a href='Product.html?i=" + i + "' class='btn btn-outline-primary font-weight-bold col mx-2' target='_blank'><i class='fas fa-info-circle'></i> التفاصيل</a> </div></div></div></div>")

                }
            }
        }
        else {
            for (var i = 0; i < prolist.length; i++) {
                div.insertAdjacentHTML('beforeend', " <div class='col-md-4 pageelement py-3'> <div class='card hover border-primary'> <div class='card-header'> <div style='overflow: hidden; white-space: nowrap; direction: rtl'>" + prolist[i].name + "</div></div><img class='img-fluid card-img-top categoryslider-img ' src='" + prolist[i].image[0] + "' alt='' style='height: 250px; object-fit: cover;'/> <div class='card-body w-100 text-primary categoryslider-body' style='position: absolute; top: 49px; background-color: black; display: none; opacity: .95; overflow-y: scroll; max-height: 100%;'> <h5 dir='rtl' class='card-title font-weight-bold text-right'>" + prolist[i].name + "</h5> <p class='card-text text-right text-pre' dir='rtl'>" + prolist[i].description + "</p><p class='card-text text-right' dir='rtl'>السعر : " + prolist[i].price + "</p></div><div class='card-footer '> <div class='row'> <a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[i].name + "' class='btn btn-outline-success font-weight-bold col mx-2' target='_blank'><i class='fas fa-phone'></i> اطلب الأن</a> <a href='Product.html?i=" + i + "' class='btn btn-outline-primary font-weight-bold col mx-2' target='_blank'><i class='fas fa-info-circle'></i> التفاصيل</a> </div></div></div></div>")
            }
        }



        $(".card").hover(function (event)
        {
            $(".categoryslider-body", this).css("height", $(".categoryslider-img", this).height());
            $(".categoryslider-body", this).fadeIn();
        });

        $(".card").mouseleave(function (event)
        {
            $(".categoryslider-body", this).fadeOut();
        });

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






