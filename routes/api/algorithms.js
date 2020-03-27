const router = require("express").Router();
const algorithmsController = require("../../controllers/algorithmsController");

// Matches with "/api/algorithms"
router.route("/")
  .get(algorithmsController.findAll)
  .post(algorithmsController.create);

// Matches with "/api/algorithms/:id"
router
  .route("/:id")
  .get(algorithmsController.findById)
  .put(algorithmsController.update)
  .delete(algorithmsController.remove);

module.exports = router;
