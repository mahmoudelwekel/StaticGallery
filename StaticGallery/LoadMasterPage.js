var d = new Date();

$.get('header.txt?v=20201107', function (data) {
    document.getElementById("MasterPageHeader").insertAdjacentHTML('beforeend', data);

}, 'text');

$.get('footer.txt?v=20201107', function (data) {
    document.getElementById("MasterPageFooter").insertAdjacentHTML('beforeend', data);

}, 'text');