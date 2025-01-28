//jshint esversion:6

var isTouchDevice = 'ontouchstart' in document.documentElement;
var buttons = $(".butn");

$(".jam-game").click(function(){
    var $Anchor = $(this).closest('section');
    var anchorTag = $($Anchor).attr("id");

    // Get the current URL and remove any existing hash
    let currentUrl = $(location).attr("href").split('#')[0];
    //"Jam-Game" SessionStorage item retrieved in Unity LevelManager.
    sessionStorage.setItem("Jam-Game", currentUrl + '#' + anchorTag);
});

$('a.disabled').html("In Development");

$(".dropdown-item").click(function(){
    $('.navbar-collapse').collapse('hide');
});

if(isTouchDevice){
    buttons.on('touchstart', pressed);
}
else{
    buttons.mousedown(pressed); 
}

function pressed(){
    $(this).attr("id", "butnPressed");

    if(isTouchDevice){
        $(this).on('touchend', function(){
            buttons.removeAttr("id");
        });
    }
    else{
        $(this).mouseup(function () {
            buttons.removeAttr("id");
        });   
    }
}