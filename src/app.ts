import "express-async-errors";
import express, { Application, json } from "express";
import { errorHandler } from "./middlewares/handle.middleware";
import { userRoutes } from "./routes/users.routes";
import { loginRoute } from "./routes/login.route";

const app: Application = express();
app.use(json());

app.use("/users", userRoutes);
app.use("/login", loginRoute);

app.use(errorHandler);

export default app;