$(document).ready(function() {
    $(".header__burgerr").click(function(){
        $(".header__burgerr,.header__info-nav").toggleClass("active");
    });
});

$(document).ready(function() {
    $(".header__burger").click(function(){
        $(".header__burger,.navigation__nav").toggleClass("actife");
    });
});

$(document).ready(function() {
    $(".header__burger").click(function(){
        $(".header__burgerr").toggleClass("inactive");
    });
});

$(document).ready(function() {
    $(".header__burgerr").click(function(){
        $(".header__burger").toggleClass("inactive");
    });
});