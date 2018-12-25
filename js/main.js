$(document).ready(function(){
    var myFullpage = new fullpage('#fullpage', {
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,
        menu: '#menu'
    });

    $('.hamburger').click(function () {
        $('header .main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('header .main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        //if (!$(e.target).closest("header .main_menu.open").length) {
            $("header .main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
       // }
        e.stopPropagation();
    });

    new WOW().init();

});


