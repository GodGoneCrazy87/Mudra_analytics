import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'stress-reduction-using-rbf.ipynb');

  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(raw);
    const cells = parsed.cells || [];
    return new Response(JSON.stringify({ cells }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Failed to read notebook:', err);
    return new Response(JSON.stringify({ error: 'Could not load notebook' }), {
      status: 500,
    });
  }
}
