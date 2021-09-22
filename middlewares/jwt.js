const { sign, verify } = require("jsonwebtoken");

const createTokens = (user) => {
  const accessToken = sign(
    { username: user.username, id: user.id },
    process.env.JWT_SECRET
  );
  return accessToken;
};

const validateToken = (req,res,next) => {
  const token = req.cookies["access-token"];

  if (!token) return res.status(400).json({error: "User not authenticated!"});

  try {
    const validToken = verify(token, process.env.JWT_SECRET);
    if (validToken) {
      req.authenticated = true;
      return next();
    }
  } catch (error) {
    console.log(err)
    return res.status(400).json({error: err})
  }
}

module.exports = { createTokens, validateToken };
