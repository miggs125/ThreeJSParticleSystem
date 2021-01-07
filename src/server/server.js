import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 8080;
const app =  express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/html/index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});