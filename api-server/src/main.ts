import * as express from 'express';

const app = express();

// req.body が使えるようになる
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "src")));

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
