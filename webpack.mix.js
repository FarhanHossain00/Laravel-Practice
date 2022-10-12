const mix = require('laravel-mix');


mix.js("resources/js/app.js", "public/js")
    .js("resources/js/main.js", "public/js")
    .postCss("resources/css/app.css", "public/css", [])
    .postCss("resources/css/style.css", "public/css", [])
    .postCss("resources/css/style.scss", "public/css", []);
