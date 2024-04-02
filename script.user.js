// ==UserScript==
// @name            YouTube O'Clock
// @description     Always has the video timestamp in the URL
// @version         2024-04-02
// @author          Robert Wesner (https://robert.wesner.io)
// @license         MIT
// @namespace       http://robert.wesner.io/
// @match           https://*.youtube.com/*
// @icon            https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant           none
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
