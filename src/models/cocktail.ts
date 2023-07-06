import mongoose from 'mongoose';

const CocktailSchema = new mongoose.Schema({
    nom: String,
    price: Number,
    alcool: Boolean,
    ingredients: String,
    description: String,
});

export default mongoose.model('Cocktail', CocktailSchema);
