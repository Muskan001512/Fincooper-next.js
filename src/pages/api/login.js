import jwt from "jsonwebtoken";

const users = [
  {
    id: 1,
    email: "muskan@gmail.com",
    password: "muskan",
    name: "User One",
  },
  {
    id: 2,
    email: "prachi@gmail.com",
    password: "prachi",
    name: "User Two",
  },
];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return res
        .status(401)
        .json({ status: 0, message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.NEXT_LOCALE_JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.status(200).json({ status: 1, token });
  }

  res.status(405).json({ status: 0, message: "Method not allowed" });
}