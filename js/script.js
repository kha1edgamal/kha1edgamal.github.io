/*global , $, window, document, WOW*/
$(document).ready(function () {


    /*Back To Top BUtton*/
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });


    /*DropDown Slide Toggle in Mobile Nav*/
    $("#ourProgramsBtn").click(function () {
        $("#ourProgramsSub").fadeToggle();
        $("#drop-arrow-1 svg").toggleClass('rotate');
    });
    $("#employersBtn").click(function () {
        $("#employersSub").fadeToggle();
        $("#drop-arrow-2 svg").toggleClass('rotate');
    });
    /*Mobile Nav*/
    $("header .mobile-nav .button a").click(function () {

        $("header .mobile-nav .overlay").toggleClass('show');
        $(this).toggleClass('btn-open').toggleClass('btn-close');
        $("html").toggleClass('overflow');
        $("header .wrap ul li ").toggleClass('fade');
        $("header .wrap .social ").toggleClass('social-fade');


    });

});
//$('header .mobile-nav .overlay').on('click', function () {
//
//
//
//    open = false;
//
//   
//
//})
/*wow animation initial*/
new WOW({
    offset: 50, // default
}).init();
/*Loading Before Animation*/
var content = document.getElementById("myContent");
content.classList.add('js-loading');
window.addEventListener("load", showPage);

function showPage() {
    content.classList.remove('js-loading');
}




/*PreLoader Script*/
$(window).load(function () {
    $('body, html').css({
        'overflow-x': 'hidden',
        'overflow-y': 'auto',
        'height': 'auto',
        'position': 'relative'
    });
    $(".screen").fadeOut("slow");
});

//IMAGE GALLERY MODAL SCRIPT

/*Open SideNav*/
//function openNav() {
//  document.getElementById("myNav").style.width = "100%";
//}


/*Close SideNav*/
//function closeNav() {
//  document.getElementById("myNav").style.width = "0%";
//}
