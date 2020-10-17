$(document).ready(function () {
    var d = new Date();
    var nocach = d.getFullYear() + d.getMonth() + d.getDay() + d.getHours() + d.getMinutes();

$.getJSON('Info/Info.json?nocache=' + nocach, function (json) {
    var infolist  = json;

    $('#call').attr('href', 'Tel:' + infolist[0].phone);
    $('#whats').attr('href', 'https://wa.me/2' + infolist[0].phone);
    $('#logo').attr('src', infolist[0].logo);
    //$('#tablogo').attr('href', infolist[0].logo);

    $('#face').attr('href', infolist[0].face);
    $('#messenger').attr('href', infolist[0].messenger);
    $('#insta').attr('href', infolist[0].insta);

    document.getElementById("placename").innerText = infolist[0].name;
    document.getElementById("brandName").innerText = infolist[0].name;
    document.getElementById("titletag").innerText = infolist[0].name + ' - الرئيسية';

    document.getElementById("adsMarquee").innerText = infolist[0].ads;

    document.getElementById("placeinfo").insertAdjacentHTML('beforeend', infolist[0].about);

    $("link[rel='icon'],link[rel='apple-touch-icon']").attr('href', infolist[0].logo);
      
    $("meta[name='twitter:title'],meta[itemprop='name'],meta[property='og:title']").attr('content', infolist[0].name);
    $("meta[name='twitter:description'],meta[itemprop='description'],meta[property='og:description'],meta[name='description']").attr('content', infolist[0].about);
    $("meta[name='twitter:image'],meta[itemprop='image'],meta[property='og:image']").attr('content', infolist[0].cover);


    //$('.titletag').attr('content', infolist[0].name);
    //$('.abouttag').attr('content', infolist[0].about);
    //$('.tablogo').attr('href', infolist[0].logo);
    //$('.metacover').attr('content', infolist[0].cover);

});
});
