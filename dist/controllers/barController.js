"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBar = exports.updateBar = exports.createBar = exports.getBar = exports.getAllBars = void 0;
const bar_1 = __importDefault(require("../models/bar"));
const getAllBars = async (req, res) => {
    try {
        const bars = await bar_1.default.find({});
        res.send(bars);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.getAllBars = getAllBars;
const getBar = async (req, res) => {
    const _id = req.params.id;
    try {
        const bar = await bar_1.default.findById(_id);
        if (!bar) {
            return res.status(404).send();
        }
        res.send(bar);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.getBar = getBar;
const createBar = async (req, res) => {
    const bar = new bar_1.default(req.body);
    try {
        await bar.save();
        res.status(201).send(bar);
    }
    catch (error) {
        res.status(400).send(error);
    }
};
exports.createBar = createBar;
const updateBar = async (req, res) => {
    const _id = req.params.id;
    try {
        const bar = await bar_1.default.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
        if (!bar) {
            return res.status(404).send();
        }
        res.send(bar);
    }
    catch (error) {
        res.status(400).send(error);
    }
};
exports.updateBar = updateBar;
const deleteBar = async (req, res) => {
    const _id = req.params.id;
    try {
        const bar = await bar_1.default.findByIdAndDelete(_id);
        if (!bar) {
            return res.status(404).send();
        }
        res.send(bar);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
exports.deleteBar = deleteBar;
