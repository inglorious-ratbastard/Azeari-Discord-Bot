const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => res.send('Discord Admin Services'));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
