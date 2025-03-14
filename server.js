const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('GGWave web app listening on port 3000');
});