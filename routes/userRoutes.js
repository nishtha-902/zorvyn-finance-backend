const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const { getUsers, updateUserStatus } = require("../controllers/userController");

router.get("/", auth, role("admin"), getUsers);
router.put("/:id", auth, role("admin"), updateUserStatus);

module.exports = router;