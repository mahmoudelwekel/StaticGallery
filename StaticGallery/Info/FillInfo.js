
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}




$(document).ready(function () {
    var d = new Date();
    var nocach = '202104122';

$.getJSON('Info/Info.json?nocache=' + nocach, function (json) {
    var infolist  = json;

    $('#call').attr('href', 'Tel:' + infolist[0].phone);
    $('#whats,.whatsLink').attr('href', 'https://wa.me/2' + infolist[0].phone);
    $('#logo').attr('src', infolist[0].logo);
    //$('#tablogo').attr('href', infolist[0].logo);

    $('#face').attr('href', infolist[0].face);
    $('#messenger').attr('href', infolist[0].messenger);
    $('#insta').attr('href', infolist[0].insta);

    $('#placename,#brandName').text(infolist[0].name);
    document.getElementById("titletag").innerText = infolist[0].name + ' - الرئيسية';

    document.getElementById("adsMarquee").innerText = infolist[0].ads;

    document.getElementById("placeinfo").insertAdjacentHTML('beforeend', infolist[0].about);

    $("link[rel='icon'],link[rel='apple-touch-icon']").attr('href', infolist[0].logo);
      
    $("meta[name='twitter:title'],meta[itemprop='name'],meta[property='og:title']").attr('content', infolist[0].name);
    $("meta[name='twitter:description'],meta[itemprop='description'],meta[property='og:description'],meta[name='description']").attr('content', infolist[0].about);
    $("meta[name='twitter:image'],meta[itemprop='image'],meta[property='og:image']").attr('content', infolist[0].cover);


});
});
