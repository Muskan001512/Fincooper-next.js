import jwt from "jsonwebtoken";

export function authMiddleware(handler) {
  return async (req, res) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({ status: 0, message: "Unauthorized" });
      }

      const decoded = jwt.verify(token, process.env.NEXT_LOCALE_JWT_SECRET);
      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      return res
        .status(401)
        .json({ status: 0, message: "Invalid or expired token" });
    }
  };
}
