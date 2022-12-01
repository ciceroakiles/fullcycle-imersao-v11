import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await axios.post('http://localhost:8000/players', { name: req.body.name });
  await res.revalidate('/players_isr_dm');
  // stale while revalidate
  // res.setHeader('stale-while-revalidate', '60');
  res.status(204);
}
