const express = require('express');git add README.md 

const app = express();

app.get('/', (res, req) => {
  return res.send('API Running!');
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

