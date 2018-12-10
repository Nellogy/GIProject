module.exports = function(app) {
    app.get('/', function (req, res, next) {
        res.send("welcome to rest");
        return next();
    })
};