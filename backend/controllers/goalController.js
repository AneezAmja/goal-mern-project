// Allows us to use errorHandler
const asyncHandler = require("express-async-handler")

const Goal = require('../models/goalModel')

// @desc   Get goals
// @route  GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {

    //READ
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// @desc   Set goals
// @route  POST /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
    console.log(req.body.text)

    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }

    //CREATE - Creating a goal
    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

// @desc   Update goals
// @route  PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error ('Goal not found')
    }

    //UPDATE
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedGoal)
})

// @desc   Delete goals
// @route  DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error ('Goal not found')
    }

    const deletedGoal = await Goal.findByIdAndRemove(req.params.id, {new: true})

    res.status(200).json(deletedGoal)
})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}