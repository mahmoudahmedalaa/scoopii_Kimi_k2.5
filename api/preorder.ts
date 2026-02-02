import { sql } from '@vercel/postgres';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  const { firstName, lastName, email } = request.body;

  if (!firstName || !lastName || !email) {
    return response.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await sql`
      INSERT INTO preorders (first_name, last_name, email, created_at)
      VALUES (${firstName}, ${lastName}, ${email}, NOW())
      ON CONFLICT (email) DO UPDATE SET 
        first_name = EXCLUDED.first_name,
        last_name = EXCLUDED.last_name,
        created_at = NOW();
    `;

    return response.status(200).json({ message: 'Pre-order submitted successfully' });
  } catch (error) {
    console.error('Database error:', error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}
