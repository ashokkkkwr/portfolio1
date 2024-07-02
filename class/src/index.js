"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var class_transformer_1 = require("class-transformer");
var User_1 = require("./models/User");
var Photo_1 = require("./models/Photo");
// Example data
var userData = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "securePassword"
};
var photoData = {
    id: 101,
    name: "Profile Photo"
};
// Transform plain object to class instance
var userInstance = (0, class_transformer_1.plainToClass)(User_1.User, userData);
console.log("User instance:", userInstance);
console.log("Full name:", userInstance.fullName); // Using exposed property
// Transform class instance back to plain object
var plainUser = (0, class_transformer_1.classToPlain)(userInstance);
console.log("Plain user object:", plainUser);
// Transform plain object to class instance for Photo
var photoInstance = (0, class_transformer_1.plainToClass)(Photo_1.Photo, photoData);
console.log("Photo instance:", photoInstance);
