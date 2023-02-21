const errorHandler = (err, req, res, next)=>{
    const statusCode = res.statusCode? res.statusCode : 500
    res.status(statusCode)
    res.json({
        message: err.message,
        // stack: processs.env.NODE_ENV ==="production"? null: err.stack,
    })
    next()
}

module.exports = {errorHandler}