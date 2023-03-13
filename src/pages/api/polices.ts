import { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';
import path from 'path';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(
    process.cwd(),
    'public',
    'assets',
    'files',
    'polices.pdf',
  );
  const fileContents = fs.readFileSync(filePath);
  res.setHeader('Content-Type', 'application/pdf');
  res.send(fileContents);
}
