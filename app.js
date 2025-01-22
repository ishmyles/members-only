import express from "express";

import adminRouter from "./routes/adminRouter.js";
import loginRouter from "./routes/loginRouter.js";
import memberRouter from "./routes/memberRouter.js";
import messagesRouter from "./routes/messagesRouter.js";
import signupRouter from "./routes/signupRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/login", loginRouter);
app.use("/sign-up", signupRouter);
app.use("/messages", messagesRouter);
app.use("/member", memberRouter);
app.use("/admin", adminRouter);

app.get("/", (req, res) =>
  res.send("<h1>HOME PAGE</h1><p>TODO: Messages list</p>")
);

app.get("*", (req, res) =>
  res.send("<h1>404 Error</h1><p>Page not found!</p>")
);

app.listen(PORT, () => console.log(`Server now listening on port ${PORT}`));
