import { sql } from '@vercel/postgres';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'GET') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { rows } = await sql`SELECT * FROM scoopii_kimi_preorders ORDER BY created_at DESC`;

    // Add cache control headers
    response.setHeader('Cache-Control', 'no-store, max-age=0');
    return response.status(200).json(rows);
  } catch (error) {
    console.error('Database error:', error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}
