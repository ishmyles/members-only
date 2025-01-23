import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import adminRouter from "./routes/adminRouter.js";
import loginRouter from "./routes/loginRouter.js";
import memberRouter from "./routes/memberRouter.js";
import messagesRouter from "./routes/messagesRouter.js";
import signupRouter from "./routes/signupRouter.js";
import { viewAllMessagesGet } from "./controllers/messagesController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use("/login", loginRouter);
app.use("/sign-up", signupRouter);
app.use("/messages", messagesRouter);
app.use("/member", memberRouter);
app.use("/admin", adminRouter);

app.get("/", viewAllMessagesGet);

app.get("*", (req, res) =>
  res.send("<h1>404 Error</h1><p>Page not found!</p>")
);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("<h1>Internal Error</h1><p>Something went wrong</p>");
});

app.listen(PORT, () => console.log(`Server now listening on port ${PORT}`));
