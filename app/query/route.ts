import { db } from "@vercel/postgres";

const client = await db.connect();

async function listInvoices() {
  const invoices = await client.sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666
    `;

  return invoices.rows;
}

export async function GET() {
  try {
    const invoices = await listInvoices();
    return Response.json(invoices);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
