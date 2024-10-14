const jwt = require('jsonwebtoken');
const tables = require("../../database/tables");
const argon2 = require('argon2');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await tables.user.readByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }

    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.APP_SECRET,
      { expiresIn: '10s' }  
    );

    res.json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = { login };