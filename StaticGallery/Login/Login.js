$(function () {
    if (getCookie('isValid') != 'true') {

        var passwordTxt = prompt("Please enter your password:", "");
        if (passwordTxt == null || passwordTxt == "") {
            alert('invalid password !');
            window.location.reload();
        } else {

            var reqUsers = new XMLHttpRequest();

            reqUsers.open('GET', 'Login/Users.json?nocache=20211005');
            reqUsers.onload = function () {
                var User = JSON.parse(reqUsers.responseText);

                var results = [];
                var searchField = "password";
                var searchVal = passwordTxt;
                for (var i = 0 ; i < User.length ; i++) {
                    if (User[i][searchField] == searchVal) {
                        results.push(User[i]);
                    }
                }

                if (results.length == 1) {
                    alert('Login Successfully !');

                    setCookie('isValid', true, 1);
                } else {
                    alert('invalid password !');

                    window.location.reload();
                }

            };
            reqUsers.send();

        }
    }

});



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}