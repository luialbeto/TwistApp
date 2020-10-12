const routes = require('express').Router();

const users = [
  {
    name: 'José Carlos',
    email: 'zecarlos@gmail.com',
    password: '123456',
  },
];

const business = [
  {
    name: 'Sobransheila',
    price: 'R$ 50.00',
  },
  { name: 'Ana Beleza', proce: 'R$ 70.00' },
  {
    name: 'Sempre Bela',
    price: 'R$ 45.00',
  },
];

routes.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email == users[0].email && password == users[0].password) {
      res.json({ status: 'ok', result: users[0] });
    } else {
      res.json({ status: 'ok', result: 'user not found' });
    }
  } catch (err) {
    res.json({ status: 'error', err });
  }
});

routes.get('/services', (req, res) => {
  try {
    res.json({ status: 'ok', business });
  } catch (err) {
    res.json({ status: 'error', err });
  }
});

module.exports = routes;
