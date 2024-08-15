import users_routes from "./Users/usersRoutes.js";

const routes = [users_routes];

const router = (app) => {
  routes.forEach((route) => {
    app.use("/api", route);
  });
};

export default router;
