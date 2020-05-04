var cat = getParameterByName('cat');


var reqCategories = new XMLHttpRequest();
reqCategories.open('GET', 'Categories/Categories.json?nocache=' + (new Date()).getTime()); reqCategories.onload = function ()
{
    var catnav=document.getElementById("catBtns");
    var Categories = JSON.parse(reqCategories.responseText);
    for (var i = 0; i < Categories.length; i++)
    {
        catnav.insertAdjacentHTML('beforeend', "<a href='Index.html?cat=" + i + "' class='nav-item nav-link  font-weight-bold'>" + Categories[i].name + "</a>  <a class='border'></a>")
    }

    if (cat != '' && cat != null) {
        var cate_descrip = document.getElementById('cate_descrip');
        cate_descrip.insertAdjacentHTML('beforeend', "<div class='alert mt-3 pt-4 alert-primary shadow-sm border border-primary text-right' dir='rtl'><h5 class=' font-weight-bold'> تفاصيل عن القسم :</h5>  " + Categories[cat].description + "</div>");


        //$('#catBtns').append($("a[href='Index.html?cat=" + cat + "']"))

        $("a[href='Index.html']").removeClass('active');
        $("a[href='Index.html?cat=" + cat + "']").addClass('active');
    }
};
reqCategories.send();
var reqproducts = new XMLHttpRequest();

reqproducts.open('GET', 'Products/Products.json?nocache=' + (new Date()).getTime());
reqproducts.onload = function ()
{
    var product = JSON.parse(reqproducts.responseText);
    FillProducts(product);
};
reqproducts.send();
function FillProducts(products) {
    var div = document.getElementById('pageRow');
    var prolist = products;
    var reqinfo = new XMLHttpRequest();
    reqinfo.open('GET', 'Info/Info.json?nocache=' + (new Date()).getTime());
    reqinfo.onload = function ()
    {
        var infolist = JSON.parse(reqinfo.responseText);
        $('#call').attr('href', 'Tel:' + infolist[0].phone);
        $('#whats').attr('href', 'https://wa.me/2' + infolist[0].phone);
        $('#logo').attr('src', infolist[0].logo);
        $('#tablogo').attr('href', infolist[0].logo);
        document.getElementById("placename").innerText = infolist[0].name;
        document.getElementById("titletag").innerText = infolist[0].name + ' - Home';
        document.getElementById("placeinfo").insertAdjacentHTML('beforeend', infolist[0].about);
        $('meta[name=description]').attr('content', infolist[0].about);



        if (cat != '' && cat != null)
        {
            var results = [];
            var searchField = "category";
            var searchVal = cat;
            for (var i = 0 ; i < prolist.length ; i++) {
                if (prolist[i][searchField] == searchVal) {
                    div.insertAdjacentHTML('beforeend', "<div class='col-md-4 pageelement py-2'><div class='card hover border-primary'><img class='img-fluid card-img-top categoryslider-img ' src='" + products[i].image + "' alt='' style='height: 300px; object-fit: cover;' /><a class='card-header btn btn-outline-primary font-weight-bold rounded-0 border-left-0 border-right-0' href='Product.html?i=" + i + "'><div style='overflow: hidden; white-space: nowrap; direction: rtl'>" + products[i].name + "</div></a><div class='card-body w-100 text-primary categoryslider-body' style='position: absolute; top: 0px; background-color: black; display: none; opacity: .95; overflow-y: scroll; max-height: 100%;'><h5 dir='rtl' class='card-title font-weight-bold text-right'>" + products[i].name + "</h5><p class='card-text text-right text-pre' dir='rtl'>" + products[i].description + "</p><p class='card-text text-right' dir='rtl'>السعر : " + products[i].price + "</p></div><a href='https://wa.me/2" + infolist[0].phone + "?text=" + products[i].name + "' class='btn btn-outline-primary card-footer font-weight-bold border-0 w-100' target='_blank'>اطلب الأن</a></div></div>")

                }
            }
        }
        else {
            for (var i = 0; i < prolist.length; i++) {
                div.insertAdjacentHTML('beforeend', "<div class='col-md-4 pageelement py-2'><div class='card hover border-primary'><img class='img-fluid card-img-top categoryslider-img ' src='" + products[i].image + "' alt='' style='height: 300px; object-fit: cover;' /><a class='card-header btn btn-outline-primary font-weight-bold rounded-0 border-left-0 border-right-0' href='Product.html?i=" + i + "'><div style='overflow: hidden; white-space: nowrap; direction: rtl'>" + products[i].name + "</div></a><div class='card-body w-100 text-primary categoryslider-body' style='position: absolute; top: 0px; background-color: black; display: none; opacity: .95; overflow-y: scroll; max-height: 100%;'><h5 dir='rtl' class='card-title font-weight-bold text-right'>" + products[i].name + "</h5><p class='card-text text-right text-pre' dir='rtl'>" + products[i].description + "</p><p class='card-text text-right' dir='rtl'>السعر : " + products[i].price + "</p></div><a href='https://wa.me/2" + infolist[0].phone + "?text=" + products[i].name + "' class='btn btn-outline-primary card-footer font-weight-bold border-0 w-100' target='_blank'>اطلب الأن</a></div></div>")
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
    };
    reqinfo.send();
}

function getParameterByName(name, url)
{
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}