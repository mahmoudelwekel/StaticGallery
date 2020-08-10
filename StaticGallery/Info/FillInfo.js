$(document).ready(function () {
    var d = new Date();
    var nocach = d.getFullYear() + d.getMonth() + d.getDay() + d.getHours() + d.getMinutes();

$.getJSON('Info/Info.json?nocache=' + nocach, function (json) {
    var infolist  = json;

    $('#call').attr('href', 'Tel:' + infolist[0].phone);
    $('#whats').attr('href', 'https://wa.me/2' + infolist[0].phone);
    $('#logo').attr('src', infolist[0].logo);
    $('#tablogo').attr('href', infolist[0].logo);

    $('#face').attr('href', infolist[0].face);
    $('#messenger').attr('href', infolist[0].messenger);
    $('#insta').attr('href', infolist[0].insta);

    document.getElementById("placename").innerText = infolist[0].name;
    document.getElementById("brandName").innerText = infolist[0].name;
    document.getElementById("titletag").innerText = infolist[0].name + ' - Home';

    document.getElementById("adsMarquee").innerText = infolist[0].ads;

    document.getElementById("placeinfo").insertAdjacentHTML('beforeend', infolist[0].about);

    $('meta[name=description]').attr('content', infolist[0].about);

});
});
