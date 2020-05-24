$(document).ready(function () {
    //AOS file
    AOS.init();

    //Mix It up section
    var mixer = mixitup('.mixall');

    //STICKY NAVIGATION SECTION
    $('.sticky-section').waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky")
        }
    });


});

function openNav() {
    document.getElementById("myNav").style.width = "100%"
};

function closeNav() {
    document.getElementById("myNav").style.width = "0%"
};