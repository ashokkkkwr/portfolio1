"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = 4000;
app.listen(port, function () {
    console.log("listening to the port".concat(port));
});
