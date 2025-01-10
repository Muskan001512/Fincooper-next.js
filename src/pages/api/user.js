import { authMiddleware } from '@/lib/authMiddleware';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), "/src/pages/api", 'customers.json');

const handler = (req, res) => {
  if (!fs.existsSync(filePath)) {
    return res.status(500).json({ status: 0, message: "Data file not found." });
  }

  const customers = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  switch (req.method) {
    case 'GET':
      // if (typeof req === "number") {
      // const user = customers.find((c) => c.id === req?.body?.get);
      res.status(200).json({ status: 1, customers });
      // } else {
      //   res.status(200).json(customers);
      // }
      break;

    case 'POST':
      // return "1";
      const newCustomer = { id: (customers[customers?.length - 1]?.id + 1), ...req.body };
      customers.push(newCustomer);
      fs.writeFileSync(filePath, JSON.stringify(customers, null, 2));
      res.status(201).json({ status: 1, newCustomer, message: "Customer created successfully" });
      break;

    case 'PUT': {
      const { id, ...updateData } = req.body;
      const index = customers.findIndex((c) => c.id === id);

      if (index === -1) {
        return res.status(404).json({ status: 0, message: "Customer not found." });
      }

      customers[index] = { ...customers[index], ...updateData };
      fs.writeFileSync(filePath, JSON.stringify(customers, null, 2));
      res.status(200).json({ status: 1, customer: customers[index], message: "Customer updated successfully" });
      break;
    }

    case 'DELETE': {
      const { id } = req.body;
      const index = customers.findIndex((c) => c.id === id);

      if (index === -1) {
        return res.status(404).json({ status: 0, message: "Customer not found." });
      }

      customers.splice(index, 1);
      fs.writeFileSync(filePath, JSON.stringify(customers, null, 2));
      res.status(200).json({ status: 1, message: "Customer deleted." });
      break;
    }

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).json({ status: 0, message: `Method ${req.method} not allowed.` });
  }
}

export default authMiddleware(handler)