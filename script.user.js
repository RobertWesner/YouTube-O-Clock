// ==UserScript==
// @name            YouTube O'Clock
// @description     Always has the video timestamp in the URL
// @version         2024-04-02
// @author          Robert Wesner (https://robert.wesner.io)
// @license         MIT
// @namespace       http://robert.wesner.io/
// @match           https://*.youtube.com/*
// @icon            https://scripts.yt/favicon.ico
// @grant           none
// @homepageURL     https://scripts.yt/scripts/youtube-o-clock-Add-And-Update-YouTube-Timestamp-When-Watching-Videos
// @supportURL      https://github.com/RobertWesner/YouTube-O-Clock/issues
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        if (window.location.pathname !== '/watch') {
            return;
        }

        let params = new URLSearchParams(location.search);
        params.set('t', Math.floor(document.querySelector('#movie_player').getCurrentTime()).toString());

        window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }, 1000);
})();
