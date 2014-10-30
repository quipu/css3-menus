var app = (function () {
    'use strict';

    return {
        init: init,
        helloWorld: helloWorld,
        bindNavToggle : bindNavToggle,
        escMenu : escMenu
    };

    function init() {
        return console.log('Init()');
    }

    function helloWorld() {
        return $('.testbtn').click(function () {
            alert('Hello, world');
        });
    }

    function bindNavToggle() {
        return $('.toggle-nav').click(function () {
            var b = $('body');
            if(b.hasClass('show-nav')) {
                b.removeClass('show-nav').addClass('hide-nav');

                setTimeout(function () {
                    b.removeClass('hide-nav');
                }, 5000);
            } else {
                b.removeClass('hide-nav').addClass('show-nav')
            }
            return false;
        })
    }

    function escMenu() {
        return $(document).keyup(function (e) {
            if(e.keyCode == 27) {
                $('body').toggleClass('show-nav');
            }
        })
    }

})();

app.init();
app.bindNavToggle();
app.escMenu();