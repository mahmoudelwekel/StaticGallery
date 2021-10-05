//البحث
$(document).ready(function () {
  

    $("#Text1").on("keyup", function () {

        var c = $(this).val().toLowerCase();

        if (c == '') {
            $('.paginationspages').data('paginate').kill();
                $('#pageRow > .filterElement').fadeIn();
            $('.paginationspages').paginate({
                scope: $('.pageelement'),

                // how many items per page
                perPage: 12,
            });
        } else {
            $('#pageRow > .filterElement').hide();
            $("#pageRow > .filterElement[name*='" + c + "']").fadeIn();

        }



 

    });
     


});

