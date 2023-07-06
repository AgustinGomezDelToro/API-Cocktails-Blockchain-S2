"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const cocktailController = __importStar(require("./controllers/cocktailController"));
const barController = __importStar(require("./controllers/barController"));
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose_1.default.connect('mongodb+srv://user:vqWSFvcT4b2NasvM@api-node.4a7tavs.mongodb.net/cocktail-api?retryWrites=true&w=majority');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Routes pour les cocktails
app.get('/cocktails', cocktailController.getAllCocktails);
app.get('/cocktails/:id', cocktailController.getCocktail);
app.post('/cocktails', cocktailController.createCocktail);
app.patch('/cocktails/:id', cocktailController.updateCocktail);
app.delete('/cocktails/:id', cocktailController.deleteCocktail);
// Routes pour les bars
app.get('/bars', barController.getAllBars);
app.get('/bars/:id', barController.getBar);
app.post('/bars', barController.createBar);
app.patch('/bars/:id', barController.updateBar);
app.delete('/bars/:id', barController.deleteBar);
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
