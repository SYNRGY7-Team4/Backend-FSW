import express from "express";
import { getUsers } from "../../controllers/Users/getUsers.js";

const users_routes = express.Router();

users_routes.post("/users", getUsers);

export default users_routes;
