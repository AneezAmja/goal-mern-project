const express = require("express");
const router = express.Router();
const {getGoals, deleteGoal, updateGoal, setGoals} = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

router.route("/").get(protect, getGoals).post(protect, setGoals)
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router