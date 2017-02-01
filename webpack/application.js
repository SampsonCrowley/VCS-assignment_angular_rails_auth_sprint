window.jQuery = require("jquery");

require("angular")
require("angular-ui-router")
require("restangular-umd")
require("./ng/vendor/devise.js");
require("./ng/app.js");

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./ng/', true, /\.js$/));