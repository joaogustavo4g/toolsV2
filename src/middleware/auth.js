// importando modulos necessarios
require('dotenv/config');
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.headers.auth;

    // verificaçõesd de token básicas
    if (!authHeader) {
        return res.status(401).send({ error: "No Token provided" })
    }

    const parts = authHeader.split(' '); // dividindo o token para verificar

    if (!parts.lenght === 2) {
        return res.status(401).send({ error: "Token error" })
    }

    const [scheme, token] = parts; // dividindo o token para verificar

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: "Token malformatted" })
    }


    // verificação Avanza
    jwt.verify(token, process.env.AUTH, (err, decoded) => {
        if (err) return res.status(401).send({ error: "Token invalid" });
        req.userId = decoded.id;
        return next();
    })

}