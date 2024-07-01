"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.default.Router();
var user_model_1 = require("../model/user.model");
var jsonwebtoken_1 = require("jsonwebtoken");
var generateToken = function (userId, role) {
    var token = jsonwebtoken_1.default.sign({ userId: userId, role: role }, 'your_secret_key', { expiresIn: '1h' });
    return token;
};
function isStrongPassword(password) {
    var minLength = 8; //yesle boolean return gardaina
    var hasUppercase = /[A-Z]/.test(password); //.test()method is used with regular expressions to check if a string matches a certain pattern. It returns true if the pattern is found in the string and false otherwise.
    var hasLowercase = /[a-z]/.test(password);
    var hasDigit = /[0-9]/.test(password);
    var specialCharacters = /[!@#$%^&*().?"|<>]/.test(password);
    return password.length >= minLength && hasUppercase && hasLowercase && hasDigit && specialCharacters;
}
function doesEmailExist(email) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_model_1.default.findOne({ email: email })];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/, user !== null];
            }
        });
    });
}
router.post('/register', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, role, validRoles, newUser, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, email = _a.email, password = _a.password, role = _a.role;
                return [4 /*yield*/, doesEmailExist(email)];
            case 1:
                if (_b.sent()) {
                    return [2 /*return*/, res.status(400).json({ message: 'Email already exists' })];
                }
                if (!email) {
                    return [2 /*return*/, res.status(400).json('please enter email')];
                }
                if (!password) {
                    return [2 /*return*/, res.status(400).json('please enter password')];
                }
                if (!email.includes('@') || !email.includes('.com')) {
                    return [2 /*return*/, res.status(400).json('invalid email format')];
                }
                if (!password) {
                    return [2 /*return*/, res.status(400).json('please enter a password')];
                }
                if (!isStrongPassword(password)) {
                    return [2 /*return*/, res.status(400).json('password is not strong enough')];
                }
                validRoles = ['user', 'admin'];
                //checks if valid roles is included.
                if (role && !validRoles.includes(role)) {
                    return [2 /*return*/, res.status(400).json('Invalid role')];
                }
                newUser = new user_model_1.default({ email: email, password: password, role: role || 'user' });
                return [4 /*yield*/, newUser.save()]; //saves to databsae
            case 2:
                _b.sent(); //saves to databsae
                return [2 /*return*/, res.status(201).json(newUser)];
            case 3:
                error_1 = _b.sent();
                console.log(error_1);
                res.status(500).send('error registering the user');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.post('/login', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, dbPassword, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_model_1.default.findOne({ email: email })];
            case 2:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, res.status(404).json('user not found')];
                }
                dbPassword = user.password;
                if (password != dbPassword) {
                    return [2 /*return*/, res.status(404).json('password did not matched')];
                }
                token = generateToken(user.id, user.role || 'user');
                res.status(200).json({ userId: user._id, token: token });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
