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
  from: string;
  to: string;
};

app.get(
  '/api/translate',
  cors(corsOptions),
  async (req: Request, res: Response) => {
    const { text, to, from } = req.query as RequestData;

    try {
      const data: Translate = await translatte(text, { to, from });

      res.json({
        message: data.text
      });
    } catch (error) {
      res.status(200).send({
        message: '',
        error
      });
    }
  }
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
