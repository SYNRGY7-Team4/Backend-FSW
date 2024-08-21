import express from "express";
import { getUserAccount } from "../../controllers/account/getUserAccount.js";
import { verifyToken } from "../../middleware/verifyToken.js";

const account_routers = express.Router();

account_routers.get("/account/", verifyToken, getUserAccount);

export default account_routers;
