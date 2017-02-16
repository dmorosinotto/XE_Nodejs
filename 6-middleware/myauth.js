//CUSTOM MIDDLEWARE TO DO CUSTOM AUTHENTICATION 
module.exports = exports = (req,res,next) => {
    if (req.header("X-Auth")==="my_secret") {
        next()
    } else {
        res.status(401).end(); //UNAUTHORIZED!
    }
};
