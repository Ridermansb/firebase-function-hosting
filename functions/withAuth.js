const VERSION = "#7";

const withAuth = function (req, res, next) {
    console.log(`${VERSION} withAuth`, req.url) // TODO Check if is auth, if not redirect to /login
    next()
}

module.exports = withAuth;