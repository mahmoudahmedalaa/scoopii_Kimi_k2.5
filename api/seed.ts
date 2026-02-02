import { sql } from '@vercel/postgres';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
    _request: VercelRequest,
    response: VercelResponse
) {
    try {
        await sql`
      CREATE TABLE IF NOT EXISTS scoopii_kimi_preorders (
        id SERIAL PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
        return response.status(200).json({ message: 'Table created successfully' });
    } catch (error) {
        console.error('Seed error:', error);
        return response.status(500).json({
            error: 'Database error',
            details: error instanceof Error ? error.message : String(error),
            envCheck: !!process.env.POSTGRES_URL
        });
    }
}
