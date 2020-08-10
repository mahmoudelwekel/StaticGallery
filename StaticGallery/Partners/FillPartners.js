$(document).ready(function () {

    var d = new Date();
    var nocach = d.getFullYear() + d.getMonth() + d.getDay() + d.getHours() + d.getMinutes();

    $.getJSON('Partners/Partners.json?nocache=' + nocach, function (json) {
    var Partnerslist = json;
    var PartnersDiv = document.getElementById('PartnersDiv');

    for (var i = 0 ; i < Partnerslist.length ; i++) {
        PartnersDiv.insertAdjacentHTML('beforeend', " <a class='card border-primary text-decoration-none' href='" + Partnerslist[i].link + "'> <img class='img-fluid rounded-circle w-75 mx-auto mt-3' src='" + Partnerslist[i].image + "'> <div class='card-body'> <h6 class='card-title font-weight-bolder' style='overflow: hidden; white-space: nowrap; direction: rtl'> " + Partnerslist[i].name + "</h6> </div></a>")

    }
    $('#PartnersDiv').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        Autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 6,
            }
        }

    })
});
});
