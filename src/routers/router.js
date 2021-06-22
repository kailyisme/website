const { Router } = require("express");
const { root, github, linkedin } = require("../controllers/controller");

const mainRouter = Router();
mainRouter.get("/", root);
mainRouter.get("/github", github);
mainRouter.get("/linkedin", linkedin);

module.exports = mainRouter;
