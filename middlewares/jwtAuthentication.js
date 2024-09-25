import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Get needed envs
const secretKey = process.env.JWT_SECRET_KEY || "sercretKey";

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token)
    return res.status(401).render("failedAction", {
      title: "Access Denied!",
      description: "You need to login to access this page.",
    });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden

    req.user = user;
    next();
  });
};

export default authenticateToken;
