


function chkToken(req, res, next) {
    if (req.body.token == activToken) {
        next()
    } else (
        res.sendStatus(401)
    )
}