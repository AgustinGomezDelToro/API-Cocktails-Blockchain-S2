"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCocktail = exports.updateCocktail = exports.createCocktail = exports.getCocktail = exports.getAllCocktails = void 0;
const cocktail_1 = __importDefault(require("../models/cocktail"));
const getAllCocktails = async (req, res) => {
    try {
        const cocktails = await cocktail_1.default.find();
        res.json(cocktails);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.getAllCocktails = getAllCocktails;
const getCocktail = async (req, res) => {
    const _id = req.params.id;
    try {
        const cocktail = await cocktail_1.default.findById(_id);
        if (!cocktail) {
            return res.status(404).send();
        }
        res.send(cocktail);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.getCocktail = getCocktail;
const createCocktail = async (req, res) => {
    const cocktail = new cocktail_1.default(req.body);
    try {
        await cocktail.save();
        res.status(201).send(cocktail);
    }
    catch (error) {
        res.status(400).send(error);
    }
};
exports.createCocktail = createCocktail;
const updateCocktail = async (req, res) => {
    const _id = req.params.id;
    try {
        const cocktail = await cocktail_1.default.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
        if (!cocktail) {
            return res.status(404).send();
        }
        res.send(cocktail);
    }
    catch (error) {
        res.status(400).send(error);
    }
};
exports.updateCocktail = updateCocktail;
const deleteCocktail = async (req, res) => {
    const _id = req.params.id;
    try {
        const cocktail = await cocktail_1.default.findByIdAndDelete(_id);
        if (!cocktail) {
            return res.status(404).send();
        }
        res.send(cocktail);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.deleteCocktail = deleteCocktail;
