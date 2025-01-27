require('dotenv').config();
const express = require('express');
const app = express();

app.get('/env', (req, res) => {
  res.send(process.env.OPENWEATHER_API_KEY);
});

app.use(express.static('public'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));