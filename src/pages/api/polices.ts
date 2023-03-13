import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(
    process.cwd(),
    '../../../public/assets/files/polices.pdf',
  );
  const stat = fs.statSync(filePath);

  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=polices.pdf');

  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
}
