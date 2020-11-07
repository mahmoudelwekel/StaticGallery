    var d = new Date();
    var nocach = '20201108';

    $.getJSON('Info/Info.json?nocache=' + nocach, function (json) {
        var infolist = json;
        $.getJSON('Categories/Categories.json?nocache=' + nocach, function (Categories) {
            var Categories = Categories;

            $.getJSON('Products/Products.json?nocache=' + nocach, function (prolist) {
                var prolist = prolist;

                var i = getParameterByName('i');
                document.getElementById("titletag").innerText = infolist[0].name + ' - ' + prolist[i].name;
                var imagelist = prolist[i].image

                $("meta[name='twitter:title'],meta[itemprop='name'],meta[property='og:title']").attr('content', prolist[i].name);
                $("meta[name='twitter:description'],meta[itemprop='description'],meta[property='og:description'],meta[name='description']").attr('content', infolist[0].name + ' - ' + prolist[i].name );
                $("meta[name='twitter:image'],meta[itemprop='image'],meta[property='og:image']").attr('content', imagelist[0]);

                var name = document.getElementById('productName');
                var details = document.getElementById('productDetails');
                var price = document.getElementById('productPrices');
                var privacy = document.getElementById('productPrivacy');
                var order = document.getElementById('productOrder');
                var slider = document.getElementById('productSlider');

                name.insertAdjacentHTML('beforeend', prolist[i].name);
                details.insertAdjacentHTML('beforeend', prolist[i].description);
                price.insertAdjacentHTML('beforeend', prolist[i].price);
                privacy.insertAdjacentHTML('beforeend', Categories[prolist[i].category].description + "<a class='h6 font-weight-bold text-info ' href='Gallery.html?cat=" + prolist[i].category + "'>المزيد عن قسم " + Categories[prolist[i].category].name + "</a>");
                order.insertAdjacentHTML('beforeend', "<a href='https://wa.me/2" + infolist[0].phone + "?text=" + prolist[i].name + "' class='btn btn-success btn-lg font-weight-bold w-100' target='_blank'><i class='fas fa-phone'></i> اطلب الأن</a>");


                slider.insertAdjacentHTML('beforeend', "<div class='carousel-item active' data-interval='2000'><img src='" + imagelist[0] + "' class='d-block w-100 fullimg'style='height: 325px; object-fit: contain;' ></div>");

                for (var i = 1; i < imagelist.length; i++) {
                    slider.insertAdjacentHTML('beforeend', "<div class='carousel-item' data-interval='2000'><img src='" + imagelist[i] + "' class='d-block w-100 fullimg' style='height: 325px; object-fit: contain;' ></div>");
                }

                $(".fullimg").click(function () {
                    document.getElementById("modalimage").src = this.src;

                    $('#exampleModal').modal('show');
                });


                console.log('Product');


            });

        });
    });





function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


