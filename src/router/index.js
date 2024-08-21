import users_routes from "./Users/usersRoutes.js";
import account_routes from "./account/accountsRoutes.js";

const routes = [users_routes, account_routes];

const router = (app) => {
  routes.forEach((route) => {
    app.use("/api", route);
  });
};

export default router;
