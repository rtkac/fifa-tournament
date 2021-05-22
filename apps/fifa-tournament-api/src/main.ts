import * as express from 'express';
const cors = require('cors');
const fs = require('fs');
const https = require('https');

import { User } from '@fifa-tournament/api-interfaces';

const app = express();
app.use(cors({ origin: 'https://localhost:3000', credentials:  true}));

const userName: User = { name: 'user name' };

app.get('/api', (req, res) => {
  // res.send(userName);
});

https.createServer({
  key: fs.readFileSync('cert/server.key'),
  cert: fs.readFileSync('cert/server.cert')
}, app)
.listen(process.env.PORT || 3002, () => {
  console.log(`Server running at ${process.env.PORT || 3002}`);
});
