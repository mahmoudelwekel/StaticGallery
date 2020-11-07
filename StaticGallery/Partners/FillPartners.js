$(document).ready(function () {

    var d = new Date();
    //var nocach = d.getFullYear() + d.getMonth() + d.getDay() + d.getHours() + d.getMinutes();
    var nocach = '20201107';

    $.getJSON('Partners/Partners.json?nocache=' + nocach, function (json) {
    var Partnerslist = json;
    var PartnersDiv = document.getElementById('PartnersDiv');

    for (var i = 0 ; i < Partnerslist.length ; i++) {
        PartnersDiv.insertAdjacentHTML('beforeend', " <a class=' text-decoration-none'  target='_blank' href='" + Partnerslist[i].link + "'> <img class='img-fluid shadow-sm rounded-circle border border-secondary w-75 mx-auto mt-3' src='" + Partnerslist[i].image + "'> <div class='card-body d-none d-md-block'> <h6 class='card-title font-weight-bolder' style='overflow: hidden; white-space: nowrap; direction: rtl'> " + Partnerslist[i].name + "</h6> </div></a>")

    }
    $('#PartnersDiv').owlCarousel({
        loop: true,
        dots: false,
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 1000,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 5,
            },
            1000: {
                items: 7,
            }
        }

    })
});
});
