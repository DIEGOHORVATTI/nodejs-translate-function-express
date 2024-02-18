import type { VercelRequest, VercelResponse } from '@vercel/node';

import { translate } from '@vitalets/google-translate-api';

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

  try {
    const { text: translatedText } = await translate(text, { to });

    res.json({
      message: translatedText
    });
  } catch (error: any) {
    res.status(500).send(`Error: ${error.toString()}`);
  }
}
