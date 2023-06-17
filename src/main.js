import $ from "jquery";
import "jquery-scrollify";
import "./style.scss";

let $section = $(".js-section");

let option = {
    easing: "swing",
    scrollSpeed: 600,
    scrollbars: true,
    before: function (index) {
        setCurrent(index);
    },
    afterRender: function () {
        setCurrent();
    },
};

$(function () {
    $.scrollify(option);
});

// ==============================
// functions
// ------------------------------

function setCurrent(index = 0) {
    $section.removeClass("is-show");
    $section.eq(index).addClass("is-show");
}
