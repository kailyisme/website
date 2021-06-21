const { Router } = require("express");
const { root } = require("../controllers/controller");

const mainRouter = Router();
mainRouter.get("/", root);

module.exports = mainRouter;
