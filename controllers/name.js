// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Name = require('../models/nameSchema');

// CRUD operations for Name
// Create Controller 
const createName = async (req, res) => { 
    const { dsflksjflks, sddfsdfsd } = req.body;
    try {
        const name = await Name.create({ dsflksjflks, sddfsdfsd }) 
        await name.save();
        res.status(201).json(name);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateName = async (req, res) => { 
    const _id=req.params.id;
    const { dsflksjflks, sddfsdfsd } = req.body;
    try {
        const name = await Name.findByIdAndUpdate( _id, { dsflksjflks, sddfsdfsd },{new:true}) 
        if (!name) {
            return res.status(404).send('name not found');
        }
        await name.save();
        res.status(201).json(name);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteName = async (req, res) => { 
    const _id=req.params.id;
    try {
        const name = await Name.findById(_id)
        if (!name) {
            return res.status(404).send('name not found');
        }
        await Name.deleteOne({_id: _id})
        await name.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getName = async (req, res) => { 
    const _id=req.params.id;
    try {
        const name = await Name.findById(_id)
        if (!name) {
            return res.status(404).send('name not found');
        }
        res.status(201).json(name);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllName = async (req, res) => { 
    try {
        const name = await Name.find({})
        if (!name) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(name);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createName,
    updateName,
    deleteName,
    getName,
    getAllName
}