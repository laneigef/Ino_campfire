import $ from "jquery";
import axios from "axios";
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
    setNowMoney();
});

// ==============================
// functions
// ------------------------------

function setCurrent(index = 0) {
    $section.removeClass("is-show");
    $section.eq(index).addClass("is-show");
}

function setNowMoney() {
    axios
        .get(
            "https://sheets.googleapis.com/v4/spreadsheets/1uL2ctS7-RyIeyDcNVISg_0gIGy-s6E8FpOPc81cKaoo/values/BA?key=API_KEY"
        )
        .then(function (response) {
            $(".count").find(".amount").html(response.data.values[0]);
        })
        .catch(function (error) {
            console.log("通信エラー");
        });
}
