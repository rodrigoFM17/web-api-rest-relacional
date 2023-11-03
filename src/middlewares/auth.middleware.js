const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWTSECRET;

const verificarJWT = (req, res, next) => {
    const token = req.get('Authorization');

    jwt.verify(token, jwtSecret, (err, decode) => {
        if (err) {
            return res.status(401).send({
                message: "error al validar token",
                error: err.message
            });
        }

        req.usuario = decode.usuario;
        next();
    })
};


module.exports = {
    verificarJWT
}