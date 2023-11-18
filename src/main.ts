// expressのすべてのモジュールを module.** の形式で使用できるようになる
import * as express from "express";
import * as path from "path";

const app = express();

// req.body が使えるようになる
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "src")));

// app.post("/api/v1/quiz", function (req, res) {
//   const answer = req.body.answer;
//   if (answer === "2") {
//     // res.send("正解！");
//     res.redirect("/correct.html");
//   } else {
//     res.redirect("/wrong.html");
//   }
// });

app.listen(3000, function () {
  console.log("I am running");
});
