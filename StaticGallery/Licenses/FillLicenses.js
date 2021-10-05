$(document).ready(function () {
    var div = document.getElementById('pageRow');

    var d = new Date();
    var nocach = '20211005';



    $.getJSON('Licenses/Licenses.json?nocache=' + nocach, function (prolist) {

            for (var i = 0; i < prolist.length; i++) {
                div.insertAdjacentHTML('beforeend', "<div class='col-12'><div class='card border border-primary shadow text-left mb-3'> <div class='card-body'> <h5 class='card-title font-weight-bolder'>" + prolist[i].name + "</h5> <hr /> <div class='card-text'> <table class='mw-100 table table-sm table-borderless text-primary'> <tbody class='mw-100'> <tr class='mw-100'> <td class='d-flex justify-content-center'><i class='fas fa-hdd fa-lg'></i></td> <td class='mw-100 break'>" + prolist[i].mac + "</td> </tr> <tr class='mw-100'> <td class='d-flex justify-content-center'><i class='fas fa-business-time fa-lg'></i></td> <td class='mw-100 break'>" + prolist[i].start + " ~ " + prolist[i].end + "</td> </tr> <tr class='mw-100'> <td class='d-flex justify-content-center'> <i class='fas fa-user-tie fa-lg '></i> </td> <td class='mw-100 break'>" + prolist[i].org + "</td> </tr> <tr class='mw-100'> <td class='d-flex justify-content-center'> <i class='fas fa-map-marked-alt fa-lg'></i> </td> <td class='mw-100 break'>" + prolist[i].place + "</td> </tr> <tr class='mw-100'> <td class='d-flex justify-content-center'> <i class='fas fa-comment-alt fa-lg'></i> </td> <td class='mw-100 break'>" + prolist[i].comment + "</td> </tr> </tbody> </table> </div> <hr /> <a href='tel:" + prolist[i].phone + "' target='_blank' class='text-decoration-none mr-1'> <i class='fas fa-phone-square fa-2x' style='color: darkslategrey;'></i> </a> <a href='https://wa.me/2" + prolist[i].phone + "' target='_blank' class='text-decoration-none mr-1'> <i class='fab fa-whatsapp-square fa-2x' style='color: #25D366;'></i> </a> <a href='" + prolist[i].link + "' target='_blank' class='text-decoration-none mr-1'> <i class='fas fa-external-link-square-alt fa-2x' style='color: #3b5998;'></i> </a> </div> </div> </div>")
            }
        



        //$(".card").hover(function (event)
        //{
        //    $(".categoryslider-body", this).css("height", $(".categoryslider-img", this).height());
        //    $(".categoryslider-body", this).fadeIn();
        //});

        //$(".card").mouseleave(function (event)
        //{
        //    $(".categoryslider-body", this).fadeOut();
        //});

        //$('.paginationspages').paginate({
        //    scope: $('.pageelement'),

        //    // how many items per page
        //    perPage: 12,
        //});

    });



});

