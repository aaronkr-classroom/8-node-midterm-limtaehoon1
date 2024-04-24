
"use strict";

const httpStatus = require('http-status-codes');


exports.logErrors = (err, req, res, next) => {
    console.error(err.stack);
    next(err);
};


exports.resNotFound = (req, res) => { 
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
};

exports.resInternalError = (err, req, res, next) => { 
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.error(`ERROR occurred: ${err.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our app is experiencing a problem!`);
}
