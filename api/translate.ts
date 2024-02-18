import express, { Request, Response } from 'express';

import cors from 'cors';

import translatte from 'translatte';

import { Translate } from './type';

const app = express();

const port = 8000;

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

type RequestData = {
  text: string;
  to: string;
};

app.get(
  '/api/translate',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const { text, to } = req.query as RequestData;

    try {
      const data: Translate = await translatte(text, { to });
      console.log(data);
      res.json({
        message: data.text
      });
    } catch (error) {
      console.log(error);

      res.status(500).send(`Error: ${JSON.stringify(error)}`);
    }
  }
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
