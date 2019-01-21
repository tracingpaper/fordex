// jQuery
try {
    window.jQuery = window.$ = require('jquery');
}
catch(e){}

//lodash

try {
    window._ = require('lodash');
}
catch(e) {}

//AOS
try {

    window.AOS = require('AOS');

    AOS.init({
        duration: 600,
        offset: 0
    });
}
catch(e) {}

//UIKit
try {
    const UIKit = require("uikit");
    const Icons = require("uikit/dist/js/uikit-icons");

    UIKit.use(Icons);

    window.UIKit = UIKit;
}
catch(e) {}