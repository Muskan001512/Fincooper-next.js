import { authMiddleware } from "@/lib/authMiddleware";
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), "/src/pages/api", 'customers.json');
const handler = (req, res) => {
    if (!fs.existsSync(filePath)) {
        return res.status(500).json({ status: 0, message: "Data file not found." });
    }
    const customers = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    if (req.method === "POST") {
        const { id } = req.body;
        const customer = customers.find((c) => c.id == id);
        if (!customer) return res.status(404).json({ status: 0, message: "Customer not found." });
        return res.status(200).json({ status: 1, customer });
    }
    res.status(405).json({ status: 0, message: "Method not allowed" });
}

export default authMiddleware(handler)
// export default handler