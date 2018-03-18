'use strict';

document.addEventListener("DOMContentLoaded", function() {
    var rest = new Rest(); // jshint ignore:line

    var inputMatch = document.getElementById("match");
    var inputMatchUrl = document.getElementById("matchUrl");
    var btnPost = document.getElementById("btnPost");
    var taResult = document.getElementById("taResult");

    inputMatch.value = "lok-atl";
    inputMatchUrl.value = "https://www.streamsports.io/live/europe/uefa-europa-league/93031/lokomotiv-moskva-vs-atletico-madrid/";

    btnPost.addEventListener("click", function() {
        var config = {
            match: inputMatch.value,
            streamSite: inputMatchUrl.value
        };
        rest.postJson("api/parse", config)
        .then((res) => {
            taResult.value = res;
        }, (err) => {
            var errStr = JSON.stringify(err, null, 2);
            taResult.value = errStr;
        });
    });

});
