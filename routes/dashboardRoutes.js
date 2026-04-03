const router = require("express").Router();
const auth = require("../middleware/authMiddleware");

const {
  getSummary,
  categoryWise
} = require("../controllers/dashboardController");

router.get("/summary", auth, getSummary);
router.get("/category", auth, getSummary);

module.exports = router;