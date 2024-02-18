import type { VercelRequest, VercelResponse } from '@vercel/node';

import translatte from 'translatte';

import { Translate } from './type';

type RequestData = {
  text: string;
  to: string;
};

export default async function handler(
  req: VercelRequest & {
    query: RequestData;
  },
  res: VercelResponse
) {
  const { text, to } = req.query;

  await translatte(text, { to })
    .then((data: Translate) => {
      res.json({
        message: data.text
      });
    })
    .catch((error: Array<string>) => {
      res.status(500).send(`Error: ${JSON.stringify(error)}`);
    });
}
