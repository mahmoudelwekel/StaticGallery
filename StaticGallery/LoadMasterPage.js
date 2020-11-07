$.ajaxSetup({ async: false });

$.get('header.txt?v=20201108', function (data) {
    document.getElementById("MasterPageHeader").insertAdjacentHTML('beforeend', data);

    console.log('Header');
}, 'text');

$.get('footer.txt?v=20201108', function (data) {
    document.getElementById("MasterPageFooter").insertAdjacentHTML('beforeend', data);

    console.log('Footer');
}, 'text');


//for (var i = 0; i < 100000; i++) {
//    console.log('1');
//}