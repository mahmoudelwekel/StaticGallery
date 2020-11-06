var d = new Date();

$.get('header.txt?v=' + d.getTime(), function (data) {
    document.getElementById("MasterPageHeader").insertAdjacentHTML('beforeend', data);

}, 'text');

$.get('footer.txt?v=' + d.getTime(), function (data) {
    document.getElementById("MasterPageFooter").insertAdjacentHTML('beforeend', data);

}, 'text');