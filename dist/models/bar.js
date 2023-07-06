"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BarSchema = new mongoose_1.default.Schema({
    location: {
        lat: Number,
        lon: Number
    },
    adresse: String,
    cocktails: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Cocktail' }]
});
exports.default = mongoose_1.default.model('Bar', BarSchema);
