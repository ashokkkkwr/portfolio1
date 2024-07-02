"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var user_controller_1 = require("./controller/user.controller");
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello, TypeScript with Express!');
});
app.use('/api', user_controller_1.default);
mongoose_1.default.connect('mongodb://localhost:27017/jvaye')
    .then(function () {
    app.listen(port, function () {
        console.log("Server is running on http://localhost:".concat(port));
    });
}).catch(function (error) {
    console.error(error);
});
console.log('lala');
