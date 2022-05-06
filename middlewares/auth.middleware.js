const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const token = req.header("token");
  if (!token) return res.status(401).json({ message: "No token provided" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(500).json({ message: "Token is not valid" });
  }
};

module.exports = {
  auth,
};
