const router = require("express").Router();
const projectRoutes = require("./projects");
const algorithmRoutes = require("./algorithms");

// All the API routes  /api/...
router.use("/projects", projectRoutes);
router.use("/algorithms", algorithmRoutes);

module.exports = router;
