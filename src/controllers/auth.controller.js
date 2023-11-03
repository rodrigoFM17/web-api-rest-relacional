const bcrypt = require('bcrypt')
const jwtToken = process.env.JWTSECRET
const db = require('../configs/db')


const login = async () =>{
    try {
        const {email, password} = req.body;

        const usuarioEncontrado = await db.execute('select * from usuario where email = ?', [email]);
        if (!usuarioEncontrado[0]) {
            return res.status(400).json({
                message: "email o password incorrecto"
            });
        }

        const passwordCorrecto = bcrypt.compareSync(password, usuarioEncontrado[0].password);
        if (!passwordCorrecto) {
            return res.status(400).json({
                message: "email o password incorrecto"
            });
        }

        const payload = {
            usuario: {
                id: usuarioEncontrado.id
            }
        }

        const token = jwt.sign(payload, jwtToken, {expiresIn: '1h'});

        return res.status(200).json({
            message: "acceso correcto",
            token
        });
    } catch (error) {
        return res.status(500).json({
            message: "ocurrió un error al validar credenciales",
            error: error.message
        });
    }
}