import $ from "jquery";
import axios from "axios";
import "jquery-scrollify";
import "./style.scss";

// Webフォント読込
(function(d) {
    var config = {
        kitId: 'aql3gvp',
        scriptTimeout: 3000,
        async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

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
            "https://sheets.googleapis.com/v4/spreadsheets/spreadsheets_KEY/values/GET?key=API_KEY"
        )
        .then(function (response) {
            $(".count").find(".amount").html(Number(response.data.values[0]).toLocaleString());
        })
        .catch(function (error) {
            console.log("通信エラー");
        });
}
