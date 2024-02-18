const handler = require('../api/translate').default;

const req = {
  query: {
    text: 'Bom dia',
    to: 'en'
  }
};

const res = {
  json: (data: Object) => console.log(data),
  status: (code: string) => ({
    send: (message: string) => console.error(code, message)
  })
};

handler(req, res);
