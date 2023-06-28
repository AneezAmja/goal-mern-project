const express = require("express");
const router = express.Router();
const {getGoals, deleteGoal, updateGoal, setGoals} = require('../controllers/goalController')

router.route("/").get(getGoals).post(setGoals)
router.route("/:id").put(updateGoal).delete(deleteGoal)

module.exports = router