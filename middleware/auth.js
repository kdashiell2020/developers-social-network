const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // get token from header
  const accessToken = req.header('x-auth-token');

  if (!accessToken) {
    return res.status(401).json({ msg: 'No token, authorization denied.' });
  }

  try {
    const decoded = jwt.verify(accessToken, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
