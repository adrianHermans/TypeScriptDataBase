"use strict";
exports.__esModule = true;
require("express-async-errors");
var express_1 = require("express");
var routes_1 = require("./routes/routes");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(routes_1.routes);
app.use(function (req, res, next) {
    if (userMatch) {
        // if user is not logged-in redirect back to login page //
        res.redirect('/menu');
    }
    else {
        // next()
        res.redirect('/');
    }
});
//Exibindo erros de exceções middleware
app.use(function (err, request, response, next) {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});
app.listen(3000, function () { return console.log("listening to port 3000"); });
